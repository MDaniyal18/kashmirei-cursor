import React from "react";
import { yearOverYearData } from "../../../data/historicalFinancials";

const YearOverYearTable = ({ title = "Year-Over-Year Financial Summary" }) => {
  return (
    <div style={{ marginTop: "48px" }}>
      <h3 style={{ fontSize: "26px", color: "#0f1b24", marginBottom: "22px", textAlign: "center", fontWeight: "700" }}>
        {title}
      </h3>

      <div style={{ overflowX: "auto", border: "1.5px solid #e4eef4", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8fbfd", borderBottom: "1.5px solid #e4eef4" }}>
              <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Fiscal Year</th>
              <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Total Revenue</th>
              <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Program Expenditures</th>
              <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Admin & General</th>
              <th style={{ padding: "18px 24px", fontSize: "14px", fontWeight: "700", color: "#0f1b24" }}>Audit Status</th>
            </tr>
          </thead>
          <tbody>
            {yearOverYearData.map((row, idx) => (
              <tr
                key={row.year}
                style={{
                  borderBottom: idx === yearOverYearData.length - 1 ? "none" : "1px solid #eef3f7",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#fcfdfe"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <td style={{ padding: "18px 24px", fontSize: "14.5px", fontWeight: "700", color: "#0f1b24" }}>{row.year}</td>
                <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#444" }}>{row.revenue}</td>
                <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#2E7D32", fontWeight: "600" }}>{row.program}</td>
                <td style={{ padding: "18px 24px", fontSize: "14.5px", color: "#E8A020", fontWeight: "600" }}>{row.admin}</td>
                <td style={{ padding: "18px 24px", fontSize: "14px" }}>
                  <span style={{ backgroundColor: "#e8f5e9", color: "#2E7D32", padding: "4px 10px", borderRadius: "20px", fontWeight: "700", fontSize: "11px", textTransform: "uppercase" }}>
                    {row.audit}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YearOverYearTable;
