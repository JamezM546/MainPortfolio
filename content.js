window.PORTFOLIO_CONTENT = {
  hero: {
    name: "James Mullins",
    role: "Computer Science · Full-Stack · Cloud",
    summary:
      "Computer Science graduate with hands-on experience building full-stack apps, backends, databases, and cloud infrastructure. Open to full-time software engineering roles across web and cloud.",
    resumeUrl: "#",
    focusTitle: "Chat apps, cloud deploys, and API-heavy builds",
    focusCopy:
      "Recent work includes a Discord-style app with WebSockets on AWS, a DOCX comparison tool for Merck, and The Lantern — a manga tracker wired to AniList’s GraphQL API.",
    gifUrl: "raining-city.gif"
  },
  stats: [
    { value: "May '26", label: "Graduated NJIT" },
    { value: "3.2", label: "GPA · Dean's List" },
    { value: "3", label: "Featured Projects" },
    { value: "AWS", label: "Cloud Practitioner Badge" }
  ],
  about: {
    paragraphOne:
      "I'm a Computer Science graduate from New Jersey Institute of Technology with a minor in Information Technology. I've built full-stack applications end to end — React frontends, Node/Express APIs, PostgreSQL data layers, Dockerized services, and AWS deploys — and I like digging into the software edge cases that show up once a system is actually used.",
    paragraphTwo:
      "That includes a Merck-sponsored document comparison tool, a real-time chat app with WebSockets and CI/CD, campus research on navigation software and AI classification, and earlier hands-on IT support that taught me how people actually use tech day to day. I'm strongest when the problem is a concrete software one: fixing broken logic, shaping APIs, or making a feature reliable under real conditions."
  },
  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML / CSS",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git / GitHub",
    "CI/CD",
    "REST APIs",
    "JWT Auth",
    "LLM Integration",
    "Bash"
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      school: "New Jersey Institute of Technology",
      detail: "May 2026 · Newark, NJ · GPA 3.2 · Dean's List · Minor in Information Technology"
    },
    {
      degree: "A.S. Mathematics and Natural Science",
      school: "Bergen Community College",
      detail: "May 2023 · Paramus, NJ · GPA 3.7"
    }
  ],
  certifications: [
    "AWS Cloud Quest: Cloud Practitioner Badge",
    "Full-Stack Web Development — Udemy",
    "C Programming — Udemy",
    "Git / GitHub — Udemy",
    "Android Development — CodePath",
    "C++ Programming — Coursera"
  ],
  projects: [
    {
      title: "Anaphor",
      tag: "Featured",
      summary:
        "Full-stack Discord-style chat app with real-time messaging, auth, and AI summarization (Groq). Built a React frontend and Node.js/Express backend with PostgreSQL and WebSocket messaging, then containerized with Docker and deployed on AWS (Amplify, Lambda) with a GitHub Actions CI/CD pipeline.",
      impact: [
        "Real-time WebSocket messaging",
        "Docker + AWS deployment",
        "CI/CD with GitHub Actions"
      ],
      tools: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "AWS", "TypeScript"],
      links: [
        { label: "GitHub", url: "https://github.com/JamezM546/Anaphor" }
      ],
      featured: true
    },
    {
      title: "Document Comparison Tool",
      tag: "Capstone",
      summary:
        "Industry-sponsored capstone for Merck & Co. — a Python DOCX comparison tool that addresses false-positive limitations in Word's native compare feature and improves tracked-revision accuracy across complex document structures.",
      impact: [
        "Fewer false positives",
        "Stronger revision output",
        "Edge-case comparison logic"
      ],
      tools: ["Python", "DOCX", "Document Diffing"],
      links: [
        { label: "GitHub", url: "https://github.com/JamezM546/Merck-Document-Comparison" }
      ],
      featured: false
    },
    {
      title: "The Lantern",
      tag: "Ongoing",
      summary:
        "Personal project — a cozy manga tracker and discovery app built with vanilla JavaScript. Search, save, and track reading progress powered by the AniList GraphQL API.",
      impact: [
        "AniList GraphQL integration",
        "Search & track reading",
        "Vanilla JS foundation"
      ],
      tools: ["JavaScript", "GraphQL", "AniList API"],
      links: [
        { label: "GitHub", url: "https://github.com/JamezM546/the-lantern" }
      ],
      featured: false
    }
  ],
  experience: [
    {
      date: "Oct 2023 – May 2026",
      title: "Office of the Provost",
      subtitle: "New Jersey Institute of Technology · Part-time · Newark, NJ",
      bullets: [
        "Edited and maintained NJIT’s website to keep information clear, accurate, and up to date.",
        "Organized scattered office records into a structured spreadsheet, improving documentation consistency across the team.",
        "Coordinated logistics for meetings and university events with staff across multiple departments.",
        "Represented the office at events in the supervisor’s absence and relayed key updates.",
        "Served as first point of contact for visitors and staff to help keep the office secure and well-run."
      ]
    },
    {
      date: "Dec 2022 – Mar 2023",
      title: "Bergen Routes Researcher & AI Developer Intern",
      subtitle: "Bergen Community College STEM Internship · Paramus, NJ",
      bullets: [
        "Co-developed a campus navigation web app with JavaScript and TypeScript to streamline student wayfinding.",
        "Mapped building layouts in AutoCAD from architectural blueprints to support omnidirectional camera setup.",
        "Contributed to Identicycle, a Python CNN project that classifies waste items into eight categories."
      ]
    },
    {
      date: "Nov 2016 – May 2020",
      title: "Intern IT Technician",
      subtitle: "Bogota Board of Education · Bogota, NJ",
      bullets: [
        "Used Microsoft SCCM and software patching to improve operational efficiency by 30%, reduce inventory discrepancies by 20%, and support 500+ users across 3 schools.",
        "Configured hardware and software, set up smart panels, and researched solutions to keep educational technology fully functional."
      ]
    }
  ],
  contact: {
    copy:
      "Open to software engineering roles across web and cloud. The best way to reach me will live here once contact links are added.",
    // Easy to fill in — uncomment / add objects like:
    // { label: "Email", url: "mailto:you@example.com" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
    // { label: "GitHub", url: "https://github.com/JamezM546" }
    links: []
  },
  footerNote: "James Mullins · Computer Science · NJIT"
};
