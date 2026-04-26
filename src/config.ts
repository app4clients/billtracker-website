// ============================================================
// 🔧 ALL-IN-ONE BILL TRACKER — WEBSITE CONFIGURATION
// ============================================================
// ✏️  Edit ANY text, URL, or value below to customize the site.
//     No need to touch App.tsx unless you want to change layout.
// ============================================================

export const APP = {
  name: "All-in-One Bill Tracker",
  shortName: "All-in-One Bill Tracker",
  tagline: "Your Complete Financial Command Center",
  description:
    "Track bills, manage subscriptions, set savings goals, and take full control of your finances — all in one beautiful, intelligent app.",
  version: "2.0",
  year: new Date().getFullYear(),

  // 🖼️ Logo — paste your logo URL here
  logo: "https://www.image2url.com/r2/default/images/1777132776868-557c921f-6a80-45db-bf84-58fab5c36cfa.png",

  // 🔗 URLs — update with your real links
  downloadUrl: "#download",
  playStoreUrl: "https://play.google.com/store/apps/details?id=YOUR_APP_ID",
  appStoreUrl: "#",
  contactEmail: "support@app4clients.com",
  websiteUrl: "https://billtracker.app",
  privacyPolicyUrl: "#",
  termsUrl: "#",

  // 📱 Social links — update with your real profile URLs
  social: {
    facebook: "https://facebook.com/allinonebilltracker",
    instagram: "https://instagram.com/allinonebilltracker",
    youtube: "https://youtube.com/@allinonebilltracker",
    tiktok: "https://tiktok.com/@allinonebilltracker",
    twitter: "https://twitter.com/billtracker",
  },

  // 💳 Secure Payment methods shown in footer
  paymentMethods: [
    { name: "PayPal", icon: "paypal" },
    { name: "Gumroad", icon: "🛒" },
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "Apple Pay", icon: "🍎" },
  ],
};

// ── LEGAL PAGES (shown as modals) ─────────────────────────
// ✏️ Edit the text below to match your actual policies.

export const PRIVACY_POLICY = {
  title: "Privacy Policy",
  icon: "🛡️",
  lastUpdated: "January 1, 2025",
  sections: [
    {
      heading: "1. Introduction",
      content:
        'Welcome to All-in-One Bill Tracker ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.',
    },
    {
      heading: "2. Information We Collect",
      content:
        "We collect information that you provide directly to us when using the app, including:\n\n• Account Information: Username, email address, and password when you create an account.\n• Financial Data: Bill names, amounts, due dates, categories, income sources, account balances, and savings goals that you manually enter.\n• Preferences: Currency selection, theme preferences, notification settings, and PIN configuration.\n• Device Information: Device type, operating system version, and unique device identifiers for security purposes.",
    },
    {
      heading: "3. How We Use Your Information",
      content:
        "We use the information we collect to:\n\n• Provide, maintain, and improve our app's features and functionality.\n• Calculate financial health scores, spending trends, and smart tips.\n• Send payment reminders and notifications that you've enabled.\n• Process premium subscriptions and manage billing.\n• Provide customer support and respond to your inquiries.\n• Detect, prevent, and address fraud and security issues.",
    },
    {
      heading: "4. Data Storage & Security",
      content:
        "Your financial data is stored securely using industry-standard encryption. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using SSL/TLS technology.",
    },
    {
      heading: "5. Third-Party Services",
      content:
        "We may use third-party services for:\n\n• Payment Processing: PayPal and Gumroad for premium subscription payments. We do not store your payment card details.\n• Exchange Rates: Live currency exchange rate data from trusted financial data providers.\n• Analytics: Anonymous usage analytics to improve app performance and user experience.\n\nThese third parties have their own privacy policies governing the use of your information.",
    },
    {
      heading: "6. Data Sharing",
      content:
        "We do NOT sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytical purposes only. No individual user data is ever shared without explicit consent.",
    },
    {
      heading: "7. Your Rights",
      content:
        "You have the right to:\n\n• Access and view all personal data stored in your account.\n• Export your data at any time via backup (JSON, CSV, or PDF).\n• Delete your account and all associated data permanently.\n• Revoke any granted permissions through your device settings.\n\nTo exercise any of these rights, contact us at support@app4clients.com.",
    },
    {
      heading: "8. Children's Privacy",
      content:
        "Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
    },
    {
      heading: "9. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the 'Last Updated' date. Your continued use of the app after changes constitutes acceptance of the updated policy.",
    },
    {
      heading: "10. Contact Us",
      content:
        `If you have any questions about this Privacy Policy, please contact us at:\n\n📧 Email: support@app4clients.com`,
    },
  ],
};

export const TERMS_OF_SERVICE = {
  title: "Terms of Service",
  icon: "📜",
  lastUpdated: "January 1, 2025",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      content:
        'By downloading, installing, or using All-in-One Bill Tracker ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App. These Terms constitute a legally binding agreement between you and All-in-One Bill Tracker.',
    },
    {
      heading: "2. Description of Service",
      content:
        "All-in-One Bill Tracker is a personal finance management application that helps users track bills, manage subscriptions, monitor spending, set savings goals, and manage financial accounts. The App supports multiple currencies and provides financial health insights and analytics.",
    },
    {
      heading: "3. Account Registration",
      content:
        "You may need to create an account to use certain features of the App. You are responsible for:\n\n• Providing accurate and complete registration information.\n• Maintaining the security of your account credentials and PIN.\n• All activities that occur under your account.\n• Notifying us immediately of any unauthorized use of your account.\n\nYou must be at least 13 years old to create an account.",
    },
    {
      heading: "4. Free and Premium Plans",
      content:
        "The App offers both free and premium subscription plans:\n\n• Free Plan: Includes basic features with limitations on the number of bills and available currencies.\n• Premium Plan: Provides unlimited access to all features including advanced analytics, payment history, savings projections, and data export.\n\nPremium subscriptions are processed securely through PayPal or Gumroad and auto-renew unless cancelled.",
    },
    {
      heading: "5. Subscription & Billing",
      content:
        "• Premium subscriptions are processed through PayPal or Gumroad.\n• Payment is charged at confirmation of purchase via your chosen payment method.\n• Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.\n• You can manage and cancel your subscription at any time through your PayPal or Gumroad account.\n• No partial refunds are provided for unused portions of a subscription period.",
    },
    {
      heading: "6. User Responsibilities",
      content:
        "You agree to:\n\n• Use the App only for lawful personal financial management purposes.\n• Not attempt to reverse engineer, decompile, or tamper with the App.\n• Not use the App to violate any applicable laws or regulations.\n• Keep your financial data accurate and up to date.\n• Understand that the App is a tool to assist you and does not provide financial advice.",
    },
    {
      heading: "7. Disclaimer of Warranties",
      content:
        'The App is provided "AS IS" without warranties of any kind. We do not guarantee:\n\n• The App will be uninterrupted, timely, secure, or error-free.\n• The accuracy, completeness, or reliability of any financial calculations, health scores, or exchange rate data.\n• The App constitutes professional financial advice.\n\nYou should consult a qualified financial advisor for important financial decisions.',
    },
    {
      heading: "8. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, All-in-One Bill Tracker shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other financial losses resulting from your use of the App.",
    },
    {
      heading: "9. Termination",
      content:
        "We may suspend or terminate your access to the App at any time for violation of these Terms. You may terminate your account at any time by deleting your account through the App's settings. Upon termination, your right to use the App ceases immediately.",
    },
    {
      heading: "10. Changes to Terms",
      content:
        "We reserve the right to modify these Terms at any time. We will provide notice of significant changes through the App or by email. Your continued use of the App after such changes constitutes acceptance of the revised Terms.",
    },
    {
      heading: "11. Contact Us",
      content:
        `For any questions about these Terms, please contact us at:\n\n📧 Email: support@app4clients.com`,
    },
  ],
};

// ── PRICING MODAL ──────────────────────────────────────────
// ── PREMIUM PAYMENT PAGE ───────────────────────────────────
// 🔗 Update these URLs with your real PayPal/Gumroad links
export const PAYMENT_OPTIONS = {
  title: "Upgrade to Premium",
  subtitle: "Choose your preferred payment method and unlock all premium features instantly.",
  paypal: {
    name: "PayPal",
    icon: "paypal",
    description: "Pay with PayPal — secure, fast, and trusted worldwide.",
    monthlyUrl: "https://www.paypal.com/webapps/billing/subscriptions?YOUR_MONTHLY_ID",
    yearlyUrl: "https://www.paypal.com/webapps/billing/subscriptions?YOUR_YEARLY_ID",
  },
  gumroad: {
    name: "Gumroad",
    icon: "🛒",
    description: "Pay with Gumroad — supports credit cards, Apple Pay, and Google Pay.",
    monthlyUrl: "https://YOURNAME.gumroad.com/l/premium-monthly",
    yearlyUrl: "https://YOURNAME.gumroad.com/l/premium-yearly",
  },
  instructions: [
    { step: 1, text: "Choose your plan and payment method below", icon: "👆" },
    { step: 2, text: "Complete payment on the secure page", icon: "💳" },
    { step: 3, text: "Return to the app — premium unlocks within minutes!", icon: "🚀" },
  ],
  premiumFeatures: [
    "Unlimited bills & subscriptions",
    "Full analytics with 6-month trends",
    "Complete payment history",
    "Late fee calculator",
    "Savings projections (3/6/12 months)",
    "CSV & PDF export",
    "Category spending limits",
    "22+ currencies with live rates",
    "Priority support",
  ],
};

export const PRICING_MODAL = {
  title: "Upgrade to Premium",
  icon: "💎",
  steps: [
    {
      step: 1,
      text: "Download & open All-in-One Bill Tracker on your Android device",
      icon: "📱",
    },
    {
      step: 2,
      text: 'Go to Settings → tap "Upgrade" or "Premium Plans"',
      icon: "⚙️",
    },
    {
      step: 3,
      text: "Choose your plan (Monthly or Yearly) and complete payment securely via PayPal or Gumroad",
      icon: "💳",
    },
    {
      step: 4,
      text: "All premium features unlock instantly! Enjoy 🎉",
      icon: "🚀",
    },
  ],
  bottomNote:
    "Your subscription is managed securely by PayPal or Gumroad. You can cancel anytime — no questions asked.",
  ctaText: "Open Payment Page",
  secondaryText: "I'll upgrade later",
};

export const COOKIE_POLICY = {
  title: "Cookie Policy",
  icon: "🍪",
  lastUpdated: "January 1, 2025",
  sections: [
    {
      heading: "1. What Are Cookies?",
      content:
        'Cookies are small text files stored on your device when you use our App or visit our website. They help us provide you with a better experience by remembering your preferences, analyzing usage patterns, and enabling key features.',
    },
    {
      heading: "2. Types of Cookies We Use",
      content:
        "We use the following types of cookies:\n\n• Essential Cookies: Required for the App to function properly, including authentication, security, and session management.\n• Preference Cookies: Remember your settings such as currency, theme (dark/light mode), and language preferences.\n• Analytics Cookies: Help us understand how users interact with the App so we can improve features and performance. All analytics data is anonymized.\n• Performance Cookies: Monitor app performance, load times, and error reporting to ensure smooth operation.",
    },
    {
      heading: "3. How We Use Cookies",
      content:
        "We use cookies to:\n\n• Keep you logged in securely during your session.\n• Remember your financial preferences and settings.\n• Deliver personalized content and smart tips.\n• Analyze app usage to improve user experience.\n• Detect and prevent fraud and security threats.\n• Measure the effectiveness of our features.",
    },
    {
      heading: "4. Third-Party Cookies",
      content:
        "Some third-party services used within our App or website may set their own cookies:\n\n• PayPal: For secure payment processing and subscription management.\n• Gumroad: For payment processing and subscription management.\n• Analytics Providers: For anonymous usage tracking.\n\nThese third parties have their own cookie and privacy policies.",
    },
    {
      heading: "5. Managing Cookies",
      content:
        "You can manage or disable cookies through your device settings:\n\n• Android: Settings → Apps → All-in-One Bill Tracker → Storage → Clear Data.\n• Web Browser: Settings → Privacy → Cookie preferences.\n\nPlease note that disabling certain cookies may affect the functionality of the App and some features may not work as intended.",
    },
    {
      heading: "6. Data Retention",
      content:
        "Cookie data is retained for as long as necessary to fulfill the purposes described in this policy. Analytics cookies are typically retained for up to 26 months. Essential and preference cookies are retained until manually cleared or the app is uninstalled.",
    },
    {
      heading: "7. Updates to This Policy",
      content:
        "We may update this Cookie Policy periodically. Any changes will be reflected in the 'Last Updated' date at the top of this page. We encourage you to review this policy regularly.",
    },
    {
      heading: "8. Contact Us",
      content:
        `If you have questions about our use of cookies, please contact us at:\n\n📧 Email: support@app4clients.com`,
    },
  ],
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
];

export const HERO = {
  headline: "Take Control of",
  headlineHighlight: "Every Bill",
  subheadline:
    "The all-in-one financial companion that tracks your bills, subscriptions, savings goals, and spending — with smart insights across 22+ currencies.",
  primaryCta: "Get Started Free",
  secondaryCta: "See All Features",
  stats: [
    { value: "22+", label: "Currencies" },
    { value: "100", label: "Health Score" },
    { value: "5", label: "Core Modules" },
    { value: "∞", label: "Possibilities" },
  ],
};

// ── SEO DATA ──────────────────────────────────────────────
export const SEO = {
  siteUrl: "https://billtracker.app",
  siteName: "All-in-One Bill Tracker",
  twitterHandle: "@billtracker",
};

// ── STATS BAR (Social Proof) ─────────────────────────────
export const STATS_BAR = [
  { value: "10,000+", label: "Downloads", icon: "📲" },
  { value: "4.8★", label: "Rating", icon: "⭐" },
  { value: "22+", label: "Currencies", icon: "💱" },
  { value: "99.9%", label: "Uptime", icon: "🟢" },
  { value: "50+", label: "Countries", icon: "🌍" },
];

// ── WHY CHOOSE US ──────────────────────────────────────────
export const WHY_CHOOSE_US = {
  title: "Why Choose All-in-One Bill Tracker?",
  subtitle: "See how we compare to other bill tracking apps on the market.",
  headers: ["Feature", "All-in-One Bill Tracker", "Other Apps"],
  rows: [
    { feature: "Financial Health Score", us: "✓ 0-100 with breakdown", other: "✗" },
    { feature: "Smart AI Tips", us: "✓ Personalized", other: "Basic" },
    { feature: "Payment Calendar", us: "✓ Interactive", other: "List only" },
    { feature: "Multi-Currency", us: "22+ with live rates", other: "1-3 currencies" },
    { feature: "Savings Projections", us: "✓ 3 scenarios", other: "✗" },
    { feature: "Late Fee Calculator", us: "✓ Auto-calculated", other: "✗" },
    { feature: "Budget Guard", us: "✓ Real-time alerts", other: "Basic budget" },
    { feature: "Payment History", us: "✓ Full tracking", other: "Limited" },
    { feature: "Export (CSV/PDF)", us: "✓ Premium", other: "✗ or limited" },
    { feature: "PIN Lock Security", us: "✓ 4-8 digits", other: "✗" },
    { feature: "Price", us: "Free / $2.99/mo", other: "$5-15/mo" },
  ],
};

// ── DOWNLOAD SECTION ───────────────────────────────────────
export const DOWNLOAD_SECTION = {
  title: "Download All-in-One Bill Tracker",
  subtitle: "Start taking control of your finances today. Free to download, no credit card required.",
  badge: "Available on Google Play",
  features: [
    "✓ Free to start",
    "✓ No credit card required",
    "✓ Set up in 2 minutes",
    "✓ Your data stays yours",
  ],
};

export const KEY_FEATURES = [
  {
    icon: "🏠",
    title: "Smart Dashboard",
    tagline: "Your financial overview at a glance",
    description:
      "Get instant clarity on your financial health with real-time stats, an intelligent health score, personalized smart tips, and an interactive payment calendar.",
    highlights: [
      "4 real-time stat cards (income, bills, balance, upcoming)",
      "Financial Health Score (0-100) with full breakdown",
      "AI-powered Smart Tips personalized to your data",
      "Interactive monthly Payment Calendar",
      "Quick Actions bar for common tasks",
    ],
  },
  {
    icon: "💰",
    title: "Bills & Subscriptions",
    tagline: "Never miss a payment again",
    description:
      "Add, manage, and track all your bills and subscriptions with smart templates, powerful search and filtering, inline editing, and complete payment history.",
    highlights: [
      "Smart Add with auto-fill templates",
      "Powerful search and multi-filter system",
      "Inline quick-edit for amounts and due dates",
      "Complete payment history per bill",
      "Mark bills as paid with one tap",
      "Sample bills to get started quickly",
    ],
  },
  {
    icon: "📊",
    title: "Deep Analytics",
    tagline: "Understand where your money goes",
    description:
      "Visualize your income vs expenses, track 6-month spending trends, break down expenses by category, set spending limits, and calculate potential late fees.",
    highlights: [
      "Income vs Expenses visual comparison",
      "6-month spending trend charts",
      "Category breakdown with percentages",
      "Category spending limits with alerts",
      "Late Fee Calculator for overdue bills",
      "Smart financial insights and advice",
    ],
  },
  {
    icon: "🎯",
    title: "Goals & Budgets",
    tagline: "Reach your financial dreams",
    description:
      "Track multiple income sources, manage all your accounts, set monthly budgets with guard rails, create savings goals with deadlines, and see projections.",
    highlights: [
      "Multiple income source tracking",
      "Multi-account management (cash, bank, card, mobile)",
      "Budget Guard with real-time progress tracking",
      "Savings Goals with deadlines and progress bars",
      "Savings Projections (3, 6, 12 month scenarios)",
      "Potential savings from inactive subscriptions",
    ],
  },
  {
    icon: "💱",
    title: "22+ Currencies",
    tagline: "Global finance, local feel",
    description:
      "Support for 22+ currencies with live exchange rates. Track bills in any currency and see everything converted in real time.",
    highlights: [
      "USD, EUR, GBP, CAD, AUD, CHF, JPY, CNY",
      "INR, BRL, MXN, SEK, KRW, TRY, ZAR",
      "EGP, SAR, AED, QAR, TND, DZD, MAD",
      "Live FX rates with auto-refresh",
      "Fallback rates for offline use",
    ],
  },
  {
    icon: "🔒",
    title: "Security & Privacy",
    tagline: "Your data stays yours",
    description:
      "Protect your financial data with PIN lock, encrypted backups, secure cloud sync, and full data export capabilities.",
    highlights: [
      "4-8 digit PIN lock for app security",
      "Encrypted backup & restore (JSON)",
      "CSV and PDF export (Premium)",
      "Secure cloud synchronization",
      "Account deletion with full data removal",
    ],
  },
];

// ── HOW IT WORKS ──────────────────────────────────────────
export const HOW_IT_WORKS = {
  title: "How It Works",
  subtitle: "Get started in 3 simple steps — from download to full financial control.",
  steps: [
    {
      step: 1,
      icon: "📱",
      title: "Download & Sign Up",
      description:
        "Download All-in-One Bill Tracker from the Play Store. Create your free account in seconds — no credit card required.",
    },
    {
      step: 2,
      icon: "📝",
      title: "Add Your Bills",
      description:
        "Use Smart Add or tap a template to quickly add your bills, subscriptions, income sources, and bank accounts.",
    },
    {
      step: 3,
      icon: "🚀",
      title: "Track & Save",
      description:
        "Watch your Financial Health Score climb, get personalized smart tips, and start saving money with real-time insights.",
    },
  ],
};

// ── TESTIMONIALS ──────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Freelancer",
    text: "This app completely changed how I manage my bills. The Financial Health Score motivates me to stay on track every month!",
    avatar: "👩‍💻",
  },
  {
    name: "Ahmed K.",
    role: "Small Business Owner",
    text: "Finally an app that supports MAD and other African currencies! The live exchange rates are a game changer for my business.",
    avatar: "👨‍💼",
  },
  {
    name: "Jessica L.",
    role: "Student",
    text: "I saved $300 in my first month just by seeing where my money was going. The category limits feature is brilliant!",
    avatar: "👩‍🎓",
  },
  {
    name: "Carlos R.",
    role: "Engineer",
    text: "The payment calendar and smart tips are incredible. I never miss a due date anymore. Best financial app I've used.",
    avatar: "👨‍🔬",
  },
];

export const CURRENCIES = [
  { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", flag: "🇪🇺", name: "Euro" },
  { code: "GBP", flag: "🇬🇧", name: "British Pound" },
  { code: "CAD", flag: "🇨🇦", name: "Canadian Dollar" },
  { code: "AUD", flag: "🇦🇺", name: "Australian Dollar" },
  { code: "CHF", flag: "🇨🇭", name: "Swiss Franc" },
  { code: "JPY", flag: "🇯🇵", name: "Japanese Yen" },
  { code: "CNY", flag: "🇨🇳", name: "Chinese Yuan" },
  { code: "INR", flag: "🇮🇳", name: "Indian Rupee" },
  { code: "BRL", flag: "🇧🇷", name: "Brazilian Real" },
  { code: "MXN", flag: "🇲🇽", name: "Mexican Peso" },
  { code: "SEK", flag: "🇸🇪", name: "Swedish Krona" },
  { code: "KRW", flag: "🇰🇷", name: "South Korean Won" },
  { code: "TRY", flag: "🇹🇷", name: "Turkish Lira" },
  { code: "ZAR", flag: "🇿🇦", name: "South African Rand" },
  { code: "EGP", flag: "🇪🇬", name: "Egyptian Pound" },
  { code: "SAR", flag: "🇸🇦", name: "Saudi Riyal" },
  { code: "AED", flag: "🇦🇪", name: "UAE Dirham" },
  { code: "QAR", flag: "🇶🇦", name: "Qatari Riyal" },
  { code: "TND", flag: "🇹🇳", name: "Tunisian Dinar" },
  { code: "DZD", flag: "🇩🇿", name: "Algerian Dinar" },
  { code: "MAD", flag: "🇲🇦", name: "Moroccan Dirham" },
];

export const PREMIUM_COMPARISON = {
  headers: ["Feature", "Free", "Premium"],
  rows: [
    { feature: "Bills", free: "Up to 10", premium: "Unlimited" },
    { feature: "Dashboard", free: "Basic", premium: "Full + Health Score" },
    { feature: "Currencies", free: "3", premium: "22+" },
    { feature: "Smart Tips", free: "✓", premium: "✓ Advanced" },
    { feature: "Payment Calendar", free: "✓", premium: "✓" },
    { feature: "6-Month Trends", free: "✗", premium: "✓" },
    { feature: "Payment History", free: "✗", premium: "✓ Full" },
    { feature: "Late Fee Calculator", free: "✗", premium: "✓" },
    { feature: "Savings Projections", free: "✗", premium: "✓" },
    { feature: "CSV / PDF Export", free: "✗", premium: "✓" },
    { feature: "Category Limits", free: "✗", premium: "✓" },
    { feature: "Priority Support", free: "✗", premium: "✓" },
  ],
};

export const PRICING = {
  monthly: {
    label: "Monthly",
    price: "$2.99",
    period: "/month",
    badge: "",
    features: [
      "All premium features",
      "Cancel anytime",
      "22+ currencies with live rates",
      "Full analytics & trends",
      "Priority support",
    ],
    cta: "Start Monthly",
    highlighted: false,
  },
  yearly: {
    label: "Yearly",
    price: "$19.99",
    period: "/year",
    badge: "Save 44%",
    features: [
      "All premium features",
      "Best value plan",
      "22+ currencies with live rates",
      "Full analytics & trends",
      "Priority support",
    ],
    cta: "Start Yearly",
    highlighted: true,
  },
};

export const FAQ_ITEMS = [
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. All data is encrypted and stored securely. You can set a 4-8 digit PIN lock for extra protection. Your data is yours — you can export or delete it anytime.",
  },
  {
    question: "Which currencies are supported?",
    answer:
      "We support 22+ currencies including USD, EUR, GBP, CAD, AUD, CHF, JPY, CNY, INR, BRL, MXN, SEK, KRW, TRY, ZAR, EGP, SAR, AED, QAR, TND, DZD, and MAD — with live exchange rates!",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes up to 10 bills, a basic dashboard with stats, smart tips, a payment calendar, and 3 currency options. It's a great way to get started!",
  },
  {
    question: "How does the Financial Health Score work?",
    answer:
      "It's a score from 0-100 based on 6 factors: savings rate (25 pts), budget usage (20 pts), bills paid on time (20 pts), setup completeness (15 pts), no late fees (10 pts), and account balance (10 pts).",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes! Premium users can export data as CSV or PDF files. All users can create and restore JSON backups for full data portability.",
  },
  {
    question: "How do savings projections work?",
    answer:
      "Set a savings goal with an optional deadline. The app calculates 3 scenarios (3, 6, or 12 months) showing exactly how much to save per month to reach your goal.",
  },
  {
    question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel anytime through your PayPal or Gumroad account. You'll continue to have premium access until the end of your current billing period.",
  },
  {
    question: "How does the Late Fee Calculator work?",
    answer:
      "Set a fee-per-day and grace period for any bill. If the bill becomes overdue, the app automatically calculates potential late fees so you know exactly what you're facing.",
  },
];

// ── SUPPORT CENTER ────────────────────────────────────────
export const SUPPORT_CENTER = {
  title: "Support Center",
  subtitle: "We're Here to Help",
  description:
    "Got questions? Need help? Our support team is ready to assist you every step of the way.",
  channels: [
    {
      icon: "📧",
      title: "Email Support",
      description: "Send us an email and we'll get back to you within 24 hours.",
      action: "Send Email",
      href: `mailto:${APP.contactEmail}`,
    },
    {
      icon: "💬",
      title: "Community Support",
      description: "Connect with other users and our team on social media.",
      action: "Follow Us",
      href: APP.social.facebook,
    },
    {
      icon: "📖",
      title: "Help Center",
      description: "Browse our FAQ and guides for quick answers.",
      action: "Browse FAQ",
      href: "#faq",
    },
    {
      icon: "🎥",
      title: "Video Tutorials",
      description: "Watch step-by-step tutorials on our YouTube channel.",
      action: "Watch Now",
      href: APP.social.youtube,
    },
  ],
};

// ── FOOTER ────────────────────────────────────────────────
export const FOOTER = {
  tagline:
    "Your complete financial command center. Track bills, manage subscriptions, set savings goals, and take full control of your finances.",
  links: {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Download", href: APP.downloadUrl },
    ],
    features: [
      { label: "Smart Dashboard", href: "#dashboard" },
      { label: "Bills & Subscriptions", href: "#bills" },
      { label: "Deep Analytics", href: "#analytics" },
      { label: "Goals & Budgets", href: "#goals" },
      { label: "22+ Currencies", href: "#currencies" },
    ],
    legal: [
      { label: "Privacy Policy", href: APP.privacyPolicyUrl },
      { label: "Terms of Service", href: APP.termsUrl },
      { label: "Cookie Policy", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: `mailto:${APP.contactEmail}` },
      { label: "Help Center", href: "#faq" },
      { label: "Facebook", href: APP.social.facebook },
      { label: "YouTube", href: APP.social.youtube },
    ],
  },
  bottomText: `© ${new Date().getFullYear()} ${APP.name} by App4Clients. All rights reserved. Built with ❤️ for your financial freedom.`,
};
