export interface TermSection {
  number: string
  title: string
  type: "text" | "list" | "list-text" | "link"
  description?: string
  items?: string[]
  note?: string
}

export const termsSections: TermSection[] = [
  {
    number: "01", title: "Use of the Website", type: "text",
    description: "This website is intended to provide job-related information for general use. You agree to use the website only for lawful purposes and in a way that does not harm, disrupt, or misuse the platform.",
  },
  {
    number: "02", title: "Job Listings Disclaimer", type: "list-text",
    description: "Daily Job Search does not directly hire or recruit candidates. All job listings are collected from various sources such as company websites, job portals, and public announcements. We do not guarantee:",
    items: ["Accuracy of job details", "Availability of positions", "Hiring outcomes"],
    note: "Users are responsible for verifying job information before applying.",
  },
  {
    number: "03", title: "No Guarantees", type: "list",
    description: "We make no guarantees regarding:",
    items: ["Job placement", "Interview calls", "Selection or hiring"],
    note: "The website is only an informational platform.",
  },
  {
    number: "04", title: "User Responsibility", type: "list",
    description: "Users are responsible for:",
    items: ["Verifying job details", "Avoiding fraudulent job offers", "Protecting personal information when applying"],
  },
  {
    number: "05", title: "Intellectual Property", type: "text",
    description: "All content on this website, including text, design, and layout, is the property of Daily Job Search unless otherwise stated. Unauthorized use or reproduction is not allowed.",
  },
  {
    number: "06", title: "External Links", type: "text",
    description: "This website may contain links to third-party websites. We are not responsible for the content, policies, or practices of these external sites.",
  },
  {
    number: "07", title: "Limitation of Liability", type: "list",
    description: "We are not liable for:",
    items: ["Any loss or damage arising from the use of this website", "Errors or omissions in job listings", "Actions taken based on the information provided"],
  },
  {
    number: "08", title: "Changes to Terms", type: "text",
    description: "We may update these Terms and Conditions at any time. Changes will be posted on this page.",
  },
  {
    number: "09", title: "Termination", type: "text",
    description: "We reserve the right to restrict or terminate access to the website if users violate these terms.",
  },
  {
    number: "10", title: "Governing Law", type: "text",
    description: "These terms are governed by applicable laws, and any disputes will be subject to the jurisdiction of the appropriate courts.",
  },
  {
    number: "11", title: "Contact", type: "link",
    description: "For any questions regarding these Terms and Conditions, please contact us through the Contact page.",
  },
]

export const termsChips: string[] = [
  "📋 Informational only", "🚫 No hiring guarantee",
  "🔐 Your data, your responsibility", "⚖️ Governed by law", "📧 Contact available",
]