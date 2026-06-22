/**
 * Parses raw CSV text into rows, handling commas inside quoted fields.
 * @param {string} text - Raw CSV content
 * @returns {string[][]} Array of row cell arrays
 */
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    if (c === '"') {
      if (inQuotes && next === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  return lines;
}

/**
 * Parses Google Sheet CSV text and structures it into a single list of items
 * for the unified Events and Announcements table.
 * 
 * @param {string} csvText - Raw published CSV from Google Sheet
 * @returns {Array<{id: string, type: string, name: string, description: string, date: string, signUpLink: string}>}
 */
export function parseCSVData(csvText) {
  const rows = parseCSV(csvText);
  if (rows.length < 2) {
    return [];
  }

  // Extract and normalize header names (lowercase, trimmed)
  const headers = rows[0].map(h => h.trim().toLowerCase());
  
  // Find index of relevant columns matching multiple options
  const getIndex = (possibleNames) => {
    return headers.findIndex(h => possibleNames.includes(h));
  };

  const typeIdx = getIndex(["type", "event/announcement type", "event or announcement"]);
  const nameIdx = getIndex(["name", "event name", "announcement name", "title"]);
  const descIdx = getIndex(["description", "event description", "announcement description", "summary", "details", "body"]);
  const dateIdx = getIndex(["date", "event date", "announcement date"]);
  const signupLinkIdx = getIndex([
    "sign-up link",
    "signup link",
    "sign up link",
    "link",
    "cta link",
    "action link",
    "signup url",
    "action",
    "signup",
    "sign-up",
    "sign up",
    "register",
    "registration"
  ]);

  const items = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row.length === 0) continue;

    // Helper to get trimmed value safely
    const getValue = (idx) => (idx !== -1 && idx < row.length ? row[idx].trim() : "");

    const name = getValue(nameIdx);
    if (!name) continue; // Skip rows without a name

    let typeRaw = getValue(typeIdx);
    let type = "Announcement"; // Default type
    if (typeRaw) {
      // Capitalize first letter of each word to make it look professional on the badge
      type = typeRaw.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    }

    const description = getValue(descIdx);
    const date = getValue(dateIdx);
    let signUpLink = getValue(signupLinkIdx);
    if (signUpLink === "--" || signUpLink === "-" || signUpLink.toLowerCase() === "n/a" || signUpLink.toLowerCase() === "none") {
      signUpLink = "";
    } else if (signUpLink && !signUpLink.startsWith("/") && !signUpLink.startsWith("http://") && !signUpLink.startsWith("https://") && signUpLink.includes(".")) {
      signUpLink = `https://${signUpLink}`;
    }

    items.push({
      id: `item-${i}`,
      type,
      name,
      description,
      date,
      signUpLink
    });
  }

  return items;
}

/**
 * Fetches data from a Google Sheet published CSV url.
 * Falls back to local/default sets if url is empty or fetch fails.
 * 
 * @param {string} csvUrl 
 * @returns {Promise<Array>}
 */
export async function fetchEventsAndAnnouncements(csvUrl) {
  if (!csvUrl) {
    throw new Error("Google Sheet CSV URL is not configured.");
  }
  
  // Add a cache-buster query parameter and fetch with cache: "no-store" to guarantee fresh data
  const urlWithCacheBuster = csvUrl.includes("?") 
    ? `${csvUrl}&t=${Date.now()}` 
    : `${csvUrl}?t=${Date.now()}`;

  const response = await fetch(urlWithCacheBuster, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch events data: ${response.statusText}`);
  }

  const csvText = await response.text();
  return parseCSVData(csvText);
}
