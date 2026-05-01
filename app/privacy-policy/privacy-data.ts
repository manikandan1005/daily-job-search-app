export interface Section {
  number: string
  title: string
  type: "list-ab" | "list" | "note" | "warning" | "link" | "adsense" | "text"
  description?: string
  personal?: string[]
  nonPersonal?: string[]
  items?: string[]
  note?: string
  warning?: string
  optOutUrl?: string
}

export const sections: Section[] = [
  {
    number: "01", title: "Information We Collect", type: "list-ab",
    personal: ["Name (if provided)", "Email address (if you contact us)"],
    nonPersonal: ["Browser type", "Device information", "Pages visited", "Time spent on the website"],
  },
  {
    number: "02", title: "How We Use Your Information", type: "list",
    items: ["Improve our website and services", "Respond to user inquiries", "Analyze website traffic and usage", "Ensure website security and performance"],
  },
  {
    number: "03", title: "Cookies", type: "note",
    description: "We use cookies to enhance your experience. Cookies help us understand user behavior and improve our website.",
    note: "You can disable cookies in your browser settings if you prefer.",
  },
  {
    number: "04", title: "Third-Party Services", type: "list",
    items: ["Analytics tools (to understand traffic)", "Advertising services (such as Google AdSense in the future)"],
    note: "These services may collect information according to their own privacy policies.",
  },
  {
    number: "05", title: "Google AdSense (Future Use)", type: "adsense",
    description: "We may use Google AdSense to display ads. Google may use cookies (such as the DoubleClick cookie) to serve ads based on users' visits to this and other websites.",
    optOutUrl: "https://www.google.com/settings/ads",
  },
  {
    number: "06", title: "Data Security", type: "warning",
    description: "We take reasonable measures to protect your information.",
    warning: "No method of transmission over the internet is 100% secure.",
  },
  { number: "07", title: "External Links", type: "text", description: "Our website may contain links to external websites. We are not responsible for the privacy practices of those websites." },
  { number: "08", title: "Children's Information", type: "text", description: "Our website is not intended for children under 13. We do not knowingly collect personal data from children." },
  { number: "09", title: "Your Consent", type: "text", description: "By using our website, you consent to our Privacy Policy." },
  { number: "10", title: "Updates to This Policy", type: "text", description: "We may update this Privacy Policy from time to time. Any changes will be posted on this page." },
  { number: "11", title: "Contact Us", type: "link", description: "If you have any questions about this Privacy Policy, you can contact us through our Contact page." },
]

export const summaryChips: string[] = [
  "🔒 No data sold", "🍪 Cookies used", "👶 13+ only",
  "🔗 Third-party links", "📧 Contact available",
]