export const CONTACT = {
  phone: "+91 70243 15567",
  phoneHref: "tel:+917024315567",
  whatsapp: "https://wa.me/917024315567",
  companyEmail: "info@ashawebtechitsolutions.com",
  founderEmail: "info@chandrabhansingh.in",
  address: "Bhopal, Madhya Pradesh, India",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chandrabhan-singh-dhakad/" },
    { label: "Instagram", href: "https://www.instagram.com/ashawebtech/" },
    { label: "Facebook", href: "https://www.facebook.com/ashawebtech/" },
    { label: "X / Twitter", href: "https://twitter.com/AshaWebTech" },
    { label: "YouTube", href: "https://www.youtube.com/@AshaWebTechITSolution" },
    { label: "GitHub · Company", href: "https://github.com/Asha-WebTech-IT-Solutions" },
    { label: "GitHub · Founder", href: "https://github.com/chandusingh" },
  ],
};

export const STATS = [
  { value: 8, suffix: "+", label: "Years building (founder)", color: "var(--c-violet)" },
  { value: 650, suffix: "+", label: "Projects engineered", color: "var(--c-pink)" },
  { value: 500, suffix: "+", label: "Projects delivered (company)", color: "var(--c-amber)" },
  { value: 350, suffix: "+", label: "Happy clients", color: "var(--c-cyan)" },
  { value: 13, suffix: "", label: "Own websites & brands", color: "var(--c-lime)" },
  { value: 13, suffix: "", label: "Android apps on Play", color: "var(--c-pink)" },
  { value: 3, suffix: "", label: "Chrome extensions", color: "var(--c-cyan)" },
  { value: 149, suffix: "", label: "Live links in our portfolio", color: "var(--c-amber)" },
];

export const PROFILES = [
  {
    key: "company",
    tag: "Company",
    name: "Asha WebTech IT Solutions Pvt Ltd",
    role: "Technology · Web Development · Digital Marketing",
    user: "Asha-WebTech-IT-Solutions",
    github: "https://github.com/Asha-WebTech-IT-Solutions",
    email: CONTACT.companyEmail,
    site: "https://ashawebtechitsolutions.com/",
    facts: ["5+ years", "500+ projects", "350+ clients", "HQ Bhopal"],
    accent: "var(--c-amber)",
    org: true,
  },
  {
    key: "founder",
    tag: "Founder",
    name: "Chandrabhan Singh Dhakad",
    role: "Founder · Full Stack Developer · SaaS Builder · AI/ML",
    user: "chandusingh",
    github: "https://github.com/chandusingh",
    email: CONTACT.founderEmail,
    site: "https://chandrabhansingh.in/",
    facts: ["8+ years", "650+ projects", "13 apps", "3 extensions"],
    accent: "var(--c-pink)",
  },
];

export const WEBSITES = [
  { domain: "ashawebtechitsolutions.com", name: "Asha WebTech", desc: "Flagship web development & digital marketing agency" },
  { domain: "ashawebtechitsolutions.in", name: "Asha WebTech India", desc: "Company website — India domain" },
  { domain: "codelumeitsolution.com", name: "Codelume IT Solution", desc: "Software & web development" },
  { domain: "webboxsoftware.com", name: "WebBox Software", desc: "Custom software solutions" },
  { domain: "futurewebdevs.com", name: "Future Web Devs", desc: "Web development brand" },
  { domain: "webdevprovider.in", name: "Web Dev Provider", desc: "Website development services" },
  { domain: "marketingtech.in", name: "MarketingTech", desc: "Digital marketing & growth solutions" },
  { domain: "vanshtechnologies.in", name: "Vansh Technologies", desc: "IT solutions & software development" },
  { domain: "algotrivo.com", name: "Algotrivo", desc: "Technology & software solutions" },
  { domain: "codetunix.com", name: "CodeTunix", desc: "Premium web & app development agency" },
  { domain: "chandrabhansingh.in", name: "Chandrabhan Singh", desc: "Founder brand & personal portfolio" },
  { domain: "leadmappo.com", name: "LeadMappo", desc: "Lead generation & marketing automation SaaS" },
  { domain: "rigorfield.com", name: "RigorField", desc: "Custom web platform" },
];

export const SERVICES = [
  { title: "Web Development", items: ["Business websites", "Custom web applications", "SaaS platforms", "MERN · Next.js · React", "WordPress & WooCommerce", "Shopify stores", "E-commerce"], span: "lg:col-span-2 lg:row-span-2", color: "var(--c-pink)" },
  { title: "App Development", items: ["Android apps", "iOS & cross-platform", "Chrome extensions"], span: "", color: "var(--c-cyan)" },
  { title: "Digital Marketing", items: ["Google Ads (PPC)", "Facebook & Instagram ads", "Social media & content", "Conversion rate optimisation"], span: "", color: "var(--c-amber)" },
  { title: "SEO", items: ["Technical SEO", "Programmatic SEO", "On-page & off-page SEO"], span: "", color: "var(--c-lime)" },
  { title: "Software, CRM & ERP", items: ["Custom software", "CRM solutions", "ERP systems", "Admin panels & dashboards"], span: "", color: "var(--c-violet)" },
  { title: "Automation & Growth", items: ["Lead generation systems", "CRM integrations", "Marketing automation", "API integrations", "Analytics & tracking"], span: "lg:col-span-2", color: "var(--c-cyan)" },
  { title: "Graphic Design", items: ["Logo design", "Branding & identity", "Print design", "UI / UX"], span: "", color: "var(--c-pink)" },
  { title: "AI / ML", items: ["AI-powered features", "Smart workflows", "Data dashboards"], span: "", color: "var(--c-amber)" },
];

const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;
export const APPS = [
  { name: "DocDesk", sub: "Patient management", href: play("com.ashawebtech.docdesk") },
  { name: "Vehicle Diary 360 India", sub: "Vehicle records", href: play("com.ashawebtech.vehiclediary360") },
  { name: "ShagunKhata", sub: "Track gift & neg", href: play("com.shagunkhata.ashawebtech") },
  { name: "Fresh Farmse", sub: "Grocery customer app", href: play("com.freshfarmse.customerfreshfarmse") },
  { name: "Dhakad Paint Station", sub: "Painter app", href: play("com.dhakadgroup.dhakadpaintstationpainter") },
  { name: "Dhakad Paint Station", sub: "Employee app", href: play("com.dhakadgroup.dhakadpaintstationemployee") },
  { name: "Dhakad Uday Yojna", sub: "Employee app", href: play("com.dhakadenterprises.udayemployee") },
  { name: "Dhakad Uday Yojna", sub: "Contractor app", href: play("com.dhakadenterprises.udaycontractor") },
  { name: "Dhakad Protsahan", sub: "Contractor app", href: play("com.dhakadgroup.contractorprotsahan") },
  { name: "Dhakad Protsahan", sub: "Employee app", href: play("com.dhakadtraders.protsahan") },
  { name: "Udhar Bahi Khata", sub: "Credit ledger", href: play("com.marketingtech.udharbahikhata") },
  { name: "Photo & Video Recover Pro", sub: "Media recovery", href: play("com.marketingtech.photorecoverpro") },
  { name: "Personal Notes", sub: "Notes", href: play("com.marketing.personalnote") },
];

export const EXTENSIONS = [
  { name: "Tracker Ghostifier", sub: "Privacy tracker blocker", href: "https://chromewebstore.google.com/detail/tracker-ghostifier-%E2%80%93-priv/bnbpifcjbdmhgibiagjnmiajmphofpdk" },
  { name: "Clipboard History Pro", sub: "Copy paste manager", href: "https://chromewebstore.google.com/detail/clipboard-history-pro-%E2%80%93-c/fikioilipajnpadddbahpkmjgcjebidk" },
  { name: "Time Tracker Per Site", sub: "Browsing time insights", href: "https://chromewebstore.google.com/detail/time-tracker-per-site/mnoinnpdfggpppiedidhmlhibemljmkp" },
];

export const WEB_APPS = [
  { name: "Smart Property Links CRM", type: "Real-estate CRM", href: "https://crm.splinksmp.com/" },
  { name: "Zell Move Management System", type: "Relocation ops", href: "https://admin.zellmove.com/" },
  { name: "AlphaIT247 App", type: "SaaS app", href: "https://app.alphait247.com/sign-in" },
  { name: "AlphaIT247 CMS", type: "Content system", href: "https://alphait247.com/cms/sign-in" },
  { name: "Hisab Kitab — Dhakad Group", type: "Accounting", href: "https://hisabkitab.dhakadgroup.com/index.php" },
  { name: "Dhakad Protsahan Yojna Admin", type: "Scheme admin", href: "https://protsahanadmin.dhakadgroup.com/admin" },
  { name: "Dhakad Uday Admin", type: "Scheme admin", href: "https://udayadmin.dhakadenterprises.in/" },
  { name: "Dhakad Paint Station Admin", type: "Business admin", href: "https://dhakadpaintstation.dhakadgroup.com/admin" },
  { name: "Manya Matrimony Admin", type: "Matrimony admin", href: "https://manyamatrimony.com/admin" },
  { name: "Shri Grow Admin Panel", type: "Admin panel", href: "https://shrigrow.com/admin/index.php" },
  { name: "Shri Grow Agent Panel", type: "Agent portal", href: "https://shrigrow.com/login.php" },
  { name: "GP Ambulga Admin", type: "Panchayat admin", href: "https://gpambulga.com/admin/login.php" },
  { name: "RCC Pattern Support System", type: "Support desk", href: "https://support.rccpattern.com/" },
];

export const CLIENTS = [
  { name: "WedFirst", href: "https://wedfirst.com/", where: "IN" },
  { name: "Zell Move", href: "https://zellmove.com/", where: "UK · IE" },
  { name: "Gugale Hospital", href: "https://gugalehospital.com/", where: "IN" },
  { name: "Sehgal Eye Institute", href: "https://sehgaleyeinstitute.com/", where: "IN" },
  { name: "Urban Team", href: "https://urbanteam.com/", where: "AU" },
  { name: "Mobility Electrified", href: "https://mobilityelectrified.com/", where: "Global" },
  { name: "Craft Haus Taproom", href: "https://www.crafthaustaproom.com/", where: "Global" },
  { name: "Fleur du Luxe", href: "https://fleurduluxe.com/", where: "UK" },
  { name: "Ishwarah", href: "https://ishwarah.com/", where: "IN" },
  { name: "Moonlight Crystals", href: "https://moonlightcrystals.com.au/", where: "AU" },
  { name: "Lending Square Group", href: "https://lendingsquaregroup.com/", where: "IN" },
  { name: "Industry Samurai Awards", href: "https://industrysamurai.com/", where: "IN" },
  { name: "Mobile Savvy", href: "https://mobilesavvy.ca/", where: "CA" },
  { name: "Super Deal Outlet", href: "https://superdealoutlet.com/", where: "US" },
];

export const TECH = ["React", "Next.js", "Node.js", "Express", "PHP", "MongoDB", "MySQL", "PostgreSQL", "WordPress", "WooCommerce", "Shopify", "Tailwind", "Firebase", "Cloudflare", "Android", "REST APIs", "Google Ads", "SEO"];

export const README_FILES = [
  { key: "company", label: "Asha-WebTech-IT-Solutions", file: "/readmes/Asha-WebTech-IT-Solutions-README.md", repo: "https://github.com/Asha-WebTech-IT-Solutions/Asha-WebTech-IT-Solutions" },
  { key: "founder", label: "chandusingh", file: "/readmes/chandusingh-README.md", repo: "https://github.com/chandusingh/chandusingh" },
];
