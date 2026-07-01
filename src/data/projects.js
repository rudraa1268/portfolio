export const projects = [
  {
    slug: "job-portal",
    title: "Job Portal",
    tagline: "Full-stack hiring platform with real application workflows.",
    tech: ["React", "Python", "Django", "DRF", "PostgreSQL", "TailwindCSS"],
    liveLink: "https://job-portal-xi-three-51.vercel.app/",
    githubLink: "https://github.com/rudraa1268/job_portal",
    deployNote:
      "Backend is hosted on Render's free tier, which spins down when idle. First load can take 50 seconds to a minute while it wakes up — after that it's fast.",
    overview:
      "A full-stack job portal built with Django REST Framework and React, modeling how real hiring platforms work end to end — not just a CRUD demo.",
    features: [
      "Role-based auth for recruiters and applicants (JWT + custom Django auth)",
      "Job listing creation, filtering, and search",
      "Application tracking — applicants can see status, recruiters can manage pipelines",
      "Admin panel for managing postings and users",
    ],
    challenges:
      "Getting auth right across React's context and Django's session/JWT handling was the hardest part — had to rebuild the AuthContext initialization to fix a CSRF/401 issue that only showed up after deployment, not locally.",
    stack_notes:
      "Backend: Django + DRF + PostgreSQL, deployed on Render. Frontend: React + Tailwind, deployed on Vercel.",
  },
  {
    slug: "mediguide",
    title: "MediGuide",
    tagline: "ML-powered medicine and exercise recommender.",
    tech: ["Python", "Django", "DRF", "React", "Machine Learning", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
    overview:
      "A medicine recommendation system — users enter symptoms and get medicine suggestions plus recommended exercises, backed by a trained ML model served through a Django REST API.",
    features: [
      "Symptom-based prediction using a trained classification model",
      "Medicine + exercise recommendations returned together, not just a lookup table",
      "Clean REST API separating the ML inference layer from the web app",
    ],
    challenges:
      "Balancing model accuracy with response speed — kept inference lightweight enough to serve synchronously through DRF without needing a task queue.",
    stack_notes: "Backend: Django + DRF + scikit-learn model. Frontend: React + Tailwind.",
  },
  {
    slug: "shopnest",
    title: "ShopNest",
    tagline: "E-commerce platform with seller dashboard and payments.",
    tech: ["Python", "Django", "DRF", "React", "PostgreSQL", "TailwindCSS", "Razorpay"],
    liveLink: "#",
    githubLink: "#",
    overview:
      "A full-stack e-commerce platform — product listings, cart, order tracking, and a seller dashboard, built as a freelance project for a real client selling art products.",
    features: [
      "JWT-authenticated cart and checkout flow",
      "Razorpay payment integration",
      "Seller dashboard for managing inventory and orders",
      "Order tracking from cart to fulfillment",
    ],
    challenges:
      "First real client project — had to design the seller/buyer data model to support both sides cleanly without duplicating logic across two different dashboards.",
    stack_notes: "Backend: Django + DRF + PostgreSQL. Frontend: React + Tailwind. Payments: Razorpay.",
  },
];
