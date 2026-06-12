// Shared programs data for KEI website
import imgHSP    from "../assets/Images/what-we-do-1.jpg";
import imgCAP    from "../assets/Images/what-we-do-2.webp";
import imgMentor from "../assets/Images/what-we-do-3.JPG";
import imgEL     from "../assets/Images/what-we-do-4.webp";
import imgGooru  from "../assets/Images/what-we-do-6th.png";
import imgDSLE   from "../assets/Images/what-we-do-6.JPG";
import imgIBSP   from "../assets/Images/what-we-do-7.JPG";
import imgGAP    from "../assets/Images/what-we-do-8.jpg";

export const programs = [
  {
    id: "hsp",
    number: "01",
    color: "#1B4F8A",
    title: "High School Support Program",
    subtitle: "Building the foundation for academic excellence",
    description:
      "The High School Support Program equips students from underserved communities with the academic skills and confidence needed to succeed in competitive high school entrance exams. Through structured coaching, mock tests, and dedicated tutors, we close the gap between potential and opportunity — ensuring every gifted student in Kashmir has a fair shot at quality secondary education.",
    stats: [
      { value: "2,800+", label: "Scholars Supported" },
      { value: "85%", label: "Exam Pass Rate" },
      { value: "10+", label: "Years Running" },
    ],
    image: imgHSP,
  },
  {
    id: "cap",
    number: "02",
    color: "#47BFDA",
    title: "Career Awareness Program",
    subtitle: "Opening windows to a world of possibilities",
    description:
      "Many students in Kashmir have never been exposed to the breadth of career pathways available to them. The Career Awareness Program bridges this gap through interactive sessions with professionals, industry visits, career fairs, and AI-assisted career mapping tools. Scholars gain clarity about their strengths, interests, and the steps required to pursue rewarding careers — turning ambition into actionable plans.",
    stats: [
      { value: "500+", label: "Career Sessions Held" },
      { value: "40+", label: "Industry Professionals" },
      { value: "8", label: "Career Domains Covered" },
    ],
    image: imgCAP,
  },
  {
    id: "mentorship",
    number: "03",
    color: "#D4860B",
    title: "Mentorship Program",
    subtitle: "Guiding scholars with real-world wisdom",
    description:
      "Our Mentorship Program pairs each scholar with a dedicated mentor from the global Kashmiri diaspora and broader professional community. Through regular one-on-one sessions, scholars receive personalised guidance on academics, career planning, and personal growth. With additional Supercoach sessions and leadership training in partnership with the Chartered Management Institute (CMI, UK), scholars develop the mindset and skills of future leaders.",
    stats: [
      { value: "300+", label: "Active Mentors" },
      { value: "1,000+", label: "Mentorship Sessions/Year" },
      { value: "CMI", label: "UK Partnership" },
    ],
    image: imgMentor,
  },
  {
    id: "experiential",
    number: "04",
    color: "#E8C020",
    title: "Experiential Learning Program",
    subtitle: "Learning by doing — beyond the textbook",
    description:
      "The Experiential Learning Program takes scholars out of the classroom and into real environments where knowledge comes alive. From hospital and laboratory visits to entrepreneurship workshops and community projects, scholars experience how education translates into action. These hands-on experiences deepen curiosity, sharpen critical thinking, and help scholars connect classroom learning to real-world challenges.",
    stats: [
      { value: "60+", label: "Workshops Conducted" },
      { value: "25+", label: "Partner Organisations" },
      { value: "1,200+", label: "Scholars Engaged" },
    ],
    image: imgEL,
  },
  {
    id: "gooru",
    number: "05",
    color: "#9E9E9E",
    title: "Gooru Navigator Program",
    subtitle: "Personalised digital learning at every pace",
    description:
      "Through our partnership with Gooru — a non-profit learning science organisation — scholars gain access to the Gooru Navigator platform, a personalised learning tool that adapts to each student's unique pace and style. The platform maps competency levels, recommends curated resources, and tracks progress over time, enabling scholars to strengthen core subjects and prepare for standardised assessments with targeted, data-driven support.",
    stats: [
      { value: "800+", label: "Active Users" },
      { value: "5,000+", label: "Learning Resources" },
      { value: "Personalised", label: "Learning Paths" },
    ],
    image: imgGooru,
  },
  {
    id: "dsle",
    number: "06",
    color: "#8B2E2E",
    title: "Digital Smart Learning Environment",
    subtitle: "Bringing world-class digital tools to Kashmir",
    description:
      "The Digital Smart Learning Environment (DSLE) program equips scholars with devices, internet connectivity, and digital literacy skills. By establishing smart learning labs in schools and providing tablets and laptops to selected scholars, KEI eliminates the digital divide that holds back so many talented students. Scholars learn to harness technology for research, collaboration, and creative problem-solving — essential competencies for the 21st century.",
    stats: [
      { value: "1,000+", label: "Devices Distributed" },
      { value: "15+", label: "Smart Labs Set Up" },
      { value: "100%", label: "Digital Literacy Focus" },
    ],
    image: imgDSLE,
  },
  {
    id: "ibsp",
    number: "07",
    color: "#6B7C3A",
    title: "International Bridge Scholarship Program",
    subtitle: "Connecting Kashmiri scholars to global institutions",
    description:
      "The International Bridge Scholarship Program (IBSP) is designed for academically outstanding scholars who aspire to pursue undergraduate or postgraduate studies at reputed international universities. KEI provides financial support, application guidance, test preparation, and visa assistance to help scholars navigate complex international admissions processes. This program ensures that geography and finances are never a barrier to a world-class education.",
    stats: [
      { value: "50+", label: "International Scholars" },
      { value: "15+", label: "Countries Reached" },
      { value: "Top 100", label: "Ranked Universities" },
    ],
    image: imgIBSP,
  },
  {
    id: "gap",
    number: "08",
    color: "#2E6B3A",
    title: "Graduate Abroad Program",
    subtitle: "Launching scholars onto the global stage",
    description:
      "The Graduate Abroad Program (GAP) supports exceptional scholars in pursuing masters and doctoral degrees at prestigious universities worldwide. Beyond financial scholarships, KEI provides mentorship from alumni who have walked the same path, assistance with research proposals, and post-study career guidance. GAP alumni go on to become doctors, engineers, researchers, and leaders who return their success to Kashmir through impact and inspiration.",
    stats: [
      { value: "30+", label: "Graduate Scholars" },
      { value: "10+", label: "Countries" },
      { value: "100%", label: "Programme Completion" },
    ],
    image: imgGAP,
  },
];
