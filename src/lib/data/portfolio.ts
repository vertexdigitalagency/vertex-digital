import type { PortfolioItem } from "@/types";

// ============================================================================
// PLACEHOLDER CONTENT — replace before launch.
//
// Every client name, result, and case study below is FICTIONAL, written to
// demonstrate the page's layout and tone. None of it describes real work for
// real companies. Before launch, replace each entry with an actual project
// (with the client's permission to publish it), or remove entries you don't
// have real case studies for yet — a shorter, all-real portfolio is always
// better than a longer one with invented work.
// ============================================================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "northgate-capital",
    title: "A private equity site built for trust, not flash",
    client: "Northgate Capital",
    category: "Premium Website",
    industry: "Finance",
    summary:
      "Northgate needed a site that felt as disciplined as their investment thesis — clear, credible, and fast for partners reviewing on mobile between meetings.",
    result: "+64% increase in qualified inbound inquiries within 90 days.",
    tags: ["Web Design", "Development", "SEO"],
  },
  {
    slug: "solace-hotels",
    title: "A booking experience guests actually enjoy using",
    client: "Solace Hotels",
    category: "E-Commerce",
    industry: "Hospitality",
    summary:
      "A five-property boutique hotel group needed a unified booking flow that felt as warm as a front-desk check-in, without sacrificing conversion.",
    result: "38% lift in direct bookings, reducing OTA commission spend.",
    tags: ["UI/UX Design", "E-Commerce", "Branding"],
  },
  {
    slug: "ferro-manufacturing",
    title: "Turning a 40-year-old manufacturer into a digital-first brand",
    client: "Ferro Manufacturing",
    category: "Custom Software",
    industry: "Manufacturing",
    summary:
      "Ferro's quoting process lived in spreadsheets and phone calls. We built a customer portal that gives clients live quotes and order tracking.",
    result: "Quote turnaround time cut from 3 days to under 4 hours.",
    tags: ["Custom Software", "Business Automation"],
  },
  {
    slug: "bright-path-clinics",
    title: "A calmer digital front door for a growing clinic network",
    client: "Bright Path Clinics",
    category: "Premium Website",
    industry: "Healthcare",
    summary:
      "Patients needed a simple way to find a location, check insurance acceptance, and book an appointment — without a cluttered, anxiety-inducing interface.",
    result: "Online appointment requests up 51% quarter over quarter.",
    tags: ["Web Design", "UI/UX Design", "Accessibility"],
  },
  {
    slug: "meridian-realty",
    title: "An AI-assisted listing experience for a regional real estate team",
    client: "Meridian Realty",
    category: "AI-Powered Web App",
    industry: "Real Estate",
    summary:
      "We built an AI assistant into the listings site that answers buyer questions about a property instantly, cutting response time for agents.",
    result: "Agent response workload reduced by roughly 30% per listing.",
    tags: ["AI Web Apps", "Custom Software"],
  },
  {
    slug: "oakwood-schools",
    title: "A parent portal that finally feels modern",
    client: "Oakwood Schools",
    category: "Custom Software",
    industry: "Education",
    summary:
      "Oakwood's district-wide parent communications were fragmented across three tools. We consolidated everything into one clean, mobile-first portal.",
    result: "Parent portal adoption reached 87% within one semester.",
    tags: ["Custom Software", "UI/UX Design"],
  },
  {
    slug: "lumen-and-co",
    title: "A full rebrand and storefront for a DTC lighting studio",
    client: "Lumen & Co.",
    category: "Branding & E-Commerce",
    industry: "Retail",
    summary:
      "Lumen came to us pre-revenue with a name and an idea. We built the brand identity and launched their storefront in the same engagement.",
    result: "Sold out its debut collection within 11 days of launch.",
    tags: ["Branding", "E-Commerce", "Web Design"],
  },
  {
    slug: "harborline",
    title: "A logistics dashboard that replaced four spreadsheets",
    client: "Harborline",
    category: "Custom Software",
    industry: "Logistics",
    summary:
      "Harborline's dispatch team tracked shipments across disconnected spreadsheets. We built a single real-time operations dashboard instead.",
    result: "Dispatch planning time reduced from 2 hours to 20 minutes daily.",
    tags: ["Custom Software", "Business Automation"],
  },
];

export const PORTFOLIO_FILTERS = [
  "All",
  "Premium Website",
  "AI-Powered Web App",
  "Custom Software",
  "E-Commerce",
  "Branding & E-Commerce",
] as const;
