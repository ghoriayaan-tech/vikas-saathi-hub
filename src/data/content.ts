export const heroStats = [
  { value: "190M", label: "Indians Unbanked" },
  { value: "₹1L Cr", label: "Lost to Fraud" },
  { value: "160M", label: "Credit-Invisible" },
];

export const problems = [
  {
    id: 1,
    title: "Payment Friction",
    icon: "Clock",
    description: "Traditional checkout = 47 seconds, 8 steps",
    stat: "8 steps",
  },
  {
    id: 2,
    title: "Credit Exclusion",
    icon: "Ban",
    description: "No CIBIL = No loan for 160M Indians",
    stat: "160M excluded",
  },
  {
    id: 3,
    title: "Digital Divide",
    icon: "Signal",
    description: "70% rural population locked out",
    stat: "70% rural",
  },
];

export const invisiPayFeatures = [
  { icon: "Zap", title: "Tapless Checkout", desc: "Walk in, pick, walk out" },
  { icon: "Bluetooth", title: "Offline Payments", desc: "No internet? No problem" },
  { icon: "Mic", title: "Voice Commands", desc: "12 languages supported" },
  { icon: "Clock", title: "Instant Settlement", desc: "Money in 2 hours" },
];

export const altCreditFeatures = [
  { icon: "Brain", title: "No-CIBIL Scoring", desc: "ML analyzes 50+ data points" },
  { icon: "Wheat", title: "Harvest-Linked Loans", desc: "Repay after harvest" },
  { icon: "Users", title: "Community Guarantees", desc: "SHG-based trust scoring" },
  { icon: "Timer", title: "2-Hour Approval", desc: "From application to disbursement" },
];

export const metrics = [
  { value: "2M+", label: "New Users Onboarded", suffix: "" },
  { value: "500", label: "Credit Disbursed", suffix: "Cr" },
  { value: "87", label: "Faster Checkouts", suffix: "%" },
  { value: "45", label: "Higher Approvals", suffix: "%" },
  { value: "<2", label: "Default Rate", suffix: "%" },
  { value: "12", label: "Languages Supported", suffix: "" },
];

export const personas = [
  {
    id: 1,
    title: "Kirana Owner",
    emoji: "🏪",
    challenge: "Cash flow crunches",
    solution: "Instant settlements, inventory credit",
  },
  {
    id: 2,
    title: "Gig Worker",
    emoji: "🛵",
    challenge: "No payslip, no credit",
    solution: "UPI history-based loans",
  },
  {
    id: 3,
    title: "Farmer",
    emoji: "🌾",
    challenge: "Seasonal income",
    solution: "Harvest-cycle loans",
  },
  {
    id: 4,
    title: "SHG Woman",
    emoji: "👩‍🌾",
    challenge: "First-time digital user",
    solution: "Voice banking in local language",
  },
  {
    id: 5,
    title: "Student",
    emoji: "🎓",
    challenge: "Need education loan",
    solution: "No guarantor required",
  },
];

export const techStack = [
  { name: "UPI/NPCI", category: "Payment" },
  { name: "Account Aggregator", category: "Data" },
  { name: "Aadhaar", category: "Identity" },
  { name: "TensorFlow", category: "ML" },
  { name: "AWS", category: "Cloud" },
  { name: "React Native", category: "Mobile" },
  { name: "BLE Beacons", category: "IoT" },
  { name: "MongoDB", category: "Database" },
];

export const pilots = [
  {
    id: 1,
    title: "Pilot 1: Kirana Tapless",
    location: "100 Kiranas | Maharashtra",
    duration: "90 Days",
    metrics: ["87% adoption", "₹2.5Cr transactions"],
  },
  {
    id: 2,
    title: "Pilot 2: No-CIBIL Lending",
    location: "1,000 Users | Pan-India",
    duration: "6 Months",
    metrics: ["45% approval rate", "1.8% default"],
  },
  {
    id: 3,
    title: "Pilot 3: Agri Finance",
    location: "50 Farmers | Karnataka",
    duration: "9 Months",
    metrics: ["₹20L disbursed", "Satellite monitoring"],
  },
];

export const team = [
  {
    id: 1,
    role: "Payments Expert",
    bio: "Ex-Paytm Payments Bank | UPI Architect",
    avatar: "👨‍💼",
  },
  {
    id: 2,
    role: "Agri Finance Lead",
    bio: "NABARD Consultant | 10+ years rural finance",
    avatar: "👩‍🌾",
  },
  {
    id: 3,
    role: "Tech Architect",
    bio: "IIT Bombay | ML + Offline Systems",
    avatar: "👨‍💻",
  },
];

export const loanTiers = [
  { minScore: 700, amount: 50000, rate: 11.0 },
  { minScore: 600, amount: 25000, rate: 12.5 },
  { minScore: 550, amount: 15000, rate: 14.0 },
];
