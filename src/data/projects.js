export const projectsData = [
  {
    slug: "finpilot-ai-business-finance-os",
    title: "FinPilot – Autonomous AI Business Finance OS",
    category: "Full Stack",
    shortDescription: "Multi-tenant B2B SaaS finance platform with real-time P&L, an 8-factor health score, and a strictly grounded AI CFO layer — zero arithmetic delegated to the LLM.",
    fullDescription: `FinPilot is a multi-tenant B2B SaaS platform that unifies a business's accounts, invoices, bills, expenses, and budgets into a single live ledger. Every number on the dashboard — cash, revenue, expenses, net profit, receivables, payables, and an 8-factor financial health score weighted across profitability, cash runway, revenue/expense trend, receivables health, payables pressure, budget discipline, and cash outlook — is computed live from real transaction data, never cached or stale.

A single ~2,400-line Financial Engine is the sole source of truth for every derived figure: revenue and expenses are always summed from the completed-transaction ledger, never from invoices or bills directly, to prevent double-counting. Any calculation that lacks enough data returns an explicit "insufficient data" flag instead of silently rendering a fake zero.

On top of that sits a strictly grounded AI CFO chat: the assistant only has access to 13 deterministic, read-only aggregation tools, and its system prompt forbids inventing numbers — it can only explain and cite the pre-computed JSON it's handed, and is instructed to say "insufficient data" rather than guess. The platform is fully usable with zero AI configured; the chat simply degrades gracefully.

Beyond the dashboard: AR/AP aging buckets with DSO and a payment-risk indicator, category-based budgets with configurable alert thresholds, day-by-day cash-flow forecasting with what-if scenario modeling (revenue growth, expense changes, new hires, payment delays), 9 exportable financial reports, customer/vendor/market intelligence, and a CSV import wizard supporting up to 20,000 rows. Multi-tier cascading transactions handle invoice and bill settlement — validate, write, update counterparty aggregates, post the ledger entry, and write an audit log, with a manual rollback stack on failure — and every model is scoped to an organization ID under 6-role RBAC (Owner, Admin, Finance Manager, Accountant, Employee, Viewer) enforced server-side, not just hidden in the UI.

At scale: 24 Mongoose models, 26 route files, 29 services, and roughly 69,000 lines of code, with JWT access/refresh token rotation (reuse detection revokes all sessions), bcrypt hashing, and rate limiting load-tested to 900 concurrent requests with zero failures.`,
    tags: ["Next.js", "Node.js", "Express 5", "TypeScript", "MongoDB", "Groq (Llama 3.3 70B)", "Zustand", "TanStack Query", "RBAC", "Recharts"],
    featured: true,
    themeColor: "amber",
    liveUrl: "https://fin-pilot-mauve.vercel.app/",
    githubUrl: "https://github.com/MohammedFaadil/Fin-Pilot",
    year: 2026,
    coverImage: "/assets/projects/finpilot-main.jpg",
    detailImages: []
  },
  {
    slug: "dr-doom-medical-consultation-assistant",
    title: "Dr. Doom – AIML Medical Consultation Assistant",
    category: "AI/ML",
    shortDescription: "Evidence-grounded AI health companion combining hybrid dense/sparse retrieval over NIH knowledge bases with a hallucination-eliminating grounding validator.",
    fullDescription: `Dr. Doom is an AI clinical information assistant — not a diagnostic tool — that walks through a patient's symptoms the way a careful clinician would: gathering the chief complaint, asking one clinically relevant follow-up question at a time, and running deterministic emergency red-flag screening on every single turn before any AI generation happens at all.

Every answer is grounded in a hybrid dense/sparse retrieval pipeline over a curated NIH knowledge base (MedlinePlus + RxNorm/MedlinePlus Connect) — FAISS cosine-similarity search using BAAI/bge-small-en-v1.5 embeddings, blended 65/35 with BM25 keyword matching, reranked, and only then handed to the LLM. A custom sentence-level GroundingValidator checks the model's output against the retrieved evidence — embedding similarity, proper-noun/year entailment, and a strict rule that any high-stakes term (stroke, heart attack, sepsis, tumor) must actually appear in the evidence to survive — stripping unsupported sentences before they ever reach the user. If the output degrades too far, the system falls back to a fully deterministic template composer, so a hallucinated diagnosis is structurally impossible, not just discouraged by a prompt.

The full pipeline is a chain of specialized agents — Intake → Emergency Risk Engine → Question → Retrieval → Clinical Explanation → Grounding Validator → Medication Safety → Summary — orchestrated as an explicit state machine that can jump to an emergency state from anywhere the moment a red flag is detected. Medication safety checks (allergy, pregnancy, pediatric, elderly flags) are answered exclusively from ingested drug data and never touch the LLM.

The UI streams the validated answer over SSE with a live "X% grounded" confidence badge, clickable per-claim citations, and a visible model/provider badge. Consultations persist to a structured summary exportable as a PDF, and the app supports native browser voice input and output. It also runs with zero API key configured, falling back through llama.cpp (SmolLM2-360M) or local Transformers (Qwen2.5-0.5B) so the grounding guarantees hold even fully offline.`,
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "FAISS", "BM25", "Llama 3.3 70B", "Docker", "SSE"],
    featured: true,
    themeColor: "teal",
    liveUrl: "https://drdoom-frontend.onrender.com/",
    githubUrl: "https://github.com/MohammedFaadil/DR-Doom",
    year: 2026,
    coverImage: "/assets/projects/drdoom-main.jpg",
    detailImages: []
  },
  {
    slug: "ai-dsa-mentor-platform",
    title: "AI DSA Mentor Platform – Real-Time Intelligent Compiler",
    category: "Full Stack",
    shortDescription: "Interactive IDE with a deterministic signal engine that infers Big-O complexity on keystrokes, plus a 7-agent LangGraph mentor that guides without leaking solutions.",
    fullDescription: `AI DSA Mentor treats the compiler as a mentor, not a grader: a two-stage pipeline watches every keystroke in a three-pane Monaco IDE (problem panel, code editor + console, streaming AI chat) and only calls an LLM when something actually warrants it.

Stage 1 is entirely deterministic and free — a Tree-sitter-based signal engine parses the AST roughly every 2 seconds across 12 languages, inferring Big-O time/space complexity and recognizing about a dozen algorithm shapes (binary search, two-pointer/sliding window, BFS/DFS, bottom-up DP, memoized recursion, union-find, heaps, prefix sums, hash lookups) in 5–20ms with zero API cost. A Trigger Policy — six unit-tested predicates (runtime failure, repeated compile error, idle/stuck, thrashing, complexity gap, milestone reached), each with its own cooldown — decides when Stage 2 actually fires. In practice it cuts LLM calls by roughly 20–70× versus naive always-on assistance: a 30-minute session that would naively need ~1,100 calls ends up making 15–55.

Stage 2 is a 7-agent LangGraph mentor (Tutor, Hint, Debug, Complexity, Code Review, Planner, Progress) running a plan → generate → guard state graph. Every response passes through a Response Guard before reaching the learner: it checks line budget, hint-level fidelity, a policy/safety blocklist, and — critically — a Dice-coefficient structural fingerprint match against the problem's reference solution, so the raw reference code never enters a prompt and full solution leaks are prevented structurally rather than by asking the model nicely. A red-team pytest suite gates CI on any prompt change that might weaken that guard.

The platform ships 13 authored problems across 4 starter languages with 3-level progressive hints, real code execution (Judge0/Piston in production with circuit-breaker failover), and a progress system with XP, time-decayed topic mastery, streaks, and a leaderboard. It runs on $0/month infrastructure and needs zero API keys for the core deterministic product — Stage 2 AI assistance is opt-in via a user-supplied OpenRouter or Groq key, routed through a provider-agnostic layer with automatic failover across OpenRouter, Groq, Together, and Ollama.`,
    tags: ["Next.js 15", "FastAPI", "LangGraph", "Tree-sitter", "Socket.IO", "Monaco Editor", "Express 4", "Prisma", "Judge0"],
    featured: true,
    themeColor: "violet",
    liveUrl: "https://ai-dsa-assistant-web.vercel.app/",
    githubUrl: "https://github.com/MohammedFaadil/AI-DSA-Assistant",
    year: 2026,
    coverImage: "/assets/projects/dsamentor-main.jpg",
    detailImages: []
  },
  {
    slug: "roamly-p2p-vehicle-rental",
    title: "Roamly – P2P Vehicle Rental Marketplace",
    category: "Full Stack",
    shortDescription: "Full-stack vehicle rental marketplace with a 10-state booking state machine, ACID transactions, and an isomorphic pricing engine for zero-latency live quotes.",
    fullDescription: `Roamly is a peer-to-peer car and bike rental marketplace for India, covering the full rental lifecycle end-to-end: search → book → verify → pay → e-sign → hand over → drive → return → review. Any account can act as both a renter and an owner — there's no separate account type — with dedicated renter and owner dashboards.

Booking correctness is enforced by a strict, server-side state machine (REQUESTED → OWNER_ACCEPTED → CONFIRMED → HANDOVER_PENDING → ACTIVE → RETURN_PENDING → COMPLETED, with OWNER_REJECTED, CANCELLED, and DISPUTED branches — 10 distinct statuses) checked on every API route, not just hidden in the UI. Double bookings are prevented at the database level: booking creation checks for overlapping reservations and owner-defined availability blocks inside a single Prisma transaction, so two concurrent requests for the same vehicle and window can never both succeed.

I built an isomorphic pricing engine — pure, framework-agnostic TypeScript that runs identically on the server (authoritative, at booking creation) and the client (instant live price breakdown with zero network round-trip). It automatically selects the cheapest applicable rate tier (hourly, daily, or weekly) and computes base fare, platform fee, GST, deposit, and included kilometers. Excess-mileage and late-return fees are calculated from real recorded data — handover vs. return odometer readings, and minutes past the scheduled return time against a configurable grace period, not estimates — and the security deposit is automatically settled against them at trip close-out.

Beyond the core rental flow, Roamly includes a damage claim and dispute workflow, owner tools (listing wizard, earnings, availability calendar, maintenance log), an admin console for managing users, vehicles, disputes, and platform settings, and a custom lightweight map view. The data model spans 22 Prisma models on PostgreSQL, with custom JWT session auth (bcrypt + jose, httpOnly cookies) and no third-party auth or payment provider — every integration point is transparently either real business logic or a clearly-marked demo flow shaped like its future real integration. The Render deployment pipeline runs an idempotent migrate → seed-if-empty → backfill flow that never wipes production data on redeploy.`,
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Render Blueprint", "Zod"],
    featured: true,
    themeColor: "sky",
    liveUrl: "https://ride-share-n9xu.onrender.com/",
    githubUrl: "https://github.com/MohammedFaadil/Roamly",
    year: 2026,
    coverImage: "/assets/projects/roamly-main.jpg",
    detailImages: []
  },
  {
    slug: "ai-candidate-search-rag-recruitment",
    title: "AI-Powered Candidate Search & RAG Recruitment Platform",
    category: "AI/ML",
    shortDescription: "Enterprise talent acquisition suite with automatic resume parsing, deterministic 7-dimension job-fit scoring, and a conversational RAG assistant over the candidate pool.",
    fullDescription: `This platform turns a folder of resumes into a searchable, scored, conversational candidate database — so hiring managers spend their time interviewing, not screening. Uploaded resumes (PDF via PyMuPDF with a pdfplumber fallback, DOCX via python-docx, or scanned documents via an OCR fallback) are run through three sequential agents: a Resume Parsing agent for factual fields, a Skill Extraction agent that classifies primary/secondary skills and normalizes synonyms, and a Profile Generation agent that writes a summary, strengths and weaknesses, suitable roles, and an overall rating — while experience-years math and availability parsing stay fully deterministic, never left to the LLM.

Every candidate is ranked against a job with 7 weighted, deterministic sub-scores computed in plain Python — skill match (22%), designation match (18%), technology match (18%), experience match (15%), industry match (12%), education match (10%), and resume freshness (5%, tiered by days since upload) — so rankings are always explainable and reproducible, never a black-box LLM number.

The conversational layer is a genuine agentic RAG pipeline: a Candidate Search agent extracts structured intent from a natural-language query, reformulates it, and embeds it (BAAI/bge-small-en-v1.5, 384-dim) for a Qdrant cosine-similarity search that returns a top-30 shortlist, which the deterministic ranking agent then scores down to a top 10 with auto-generated justifications for the top 3. Follow-up questions resolve which candidates you mean from conversation memory alone — no repeat vector search — and pool-wide aggregate questions ("how many Python developers do we have?") bypass ranking entirely, answered by a dedicated deterministic Analytics agent over the whole candidate pool instead of an LLM guess.

Across 8 total specialized agents (including a domain-gatekeeper Validation agent), every LLM call routes through a single swappable client, letting the system run against DeepSeek, Ollama/RunPod (Qwen 2.5 14B), or Groq (Llama 3.3 70B) without touching business logic — chosen specifically so ranking, experience math, and grounding stay auditable and stable regardless of which model is behind the chat.`,
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Prisma", "Qdrant", "BGE Embeddings", "DeepSeek", "Ollama", "Zustand"],
    featured: true,
    themeColor: "indigo",
    liveUrl: "https://rag-chatbot-mocha-rho.vercel.app/",
    githubUrl: "https://github.com/MohammedFaadil/RAG-Chatbot",
    year: 2026,
    coverImage: "/assets/projects/ragchatbot-main.jpg",
    detailImages: []
  },
  {
    slug: "pdf-to-ai-adaptive-quiz",
    title: "PDF to AI Adaptive Quiz Generation System",
    category: "AI/ML",
    shortDescription: "Built an AI-driven platform converting PDFs into adaptive quizzes using NLP and semantic chunking.",
    fullDescription: `Built an AI-driven platform that converts PDFs into adaptive quizzes using NLP-based semantic chunking. Uploaded documents flow through a processing pipeline — ingestion, chunking, vector indexing, and quiz generation — with each stage backed by its own data store, so quiz generation is grounded in the actual structure of the source document rather than a flat text dump.

The backend is a FastAPI service organized into clean API, core, services, db, and config layers, with a dedicated deduplication module to avoid near-duplicate questions, and a separate SQS-backed worker process for asynchronous processing so large PDF ingestion doesn't block the request/response cycle. NLP components run on Hugging Face Transformers and Sentence Transformers for semantic understanding and embedding generation.

The adaptive learning logic adjusts question difficulty in real time based on user responses, and the system tracks performance to personalize the pace of assessment. The full stack — FastAPI backend, Vite/React frontend, PostgreSQL, Redis, and an Nginx reverse proxy — is fully containerized with Docker Compose, with health checks gating backend startup on the database and cache reporting healthy, and is designed for production deployment on AWS (ECS tasks, S3, SQS, and Bedrock, with secrets managed via SSM Parameter Store and rotated JWT signing).`,
    tags: ["FastAPI", "Transformers", "Sentence Transformers", "PostgreSQL", "Redis", "Docker Compose", "AWS"],
    featured: false,
    themeColor: "indigo",
    githubUrl: "https://github.com/MohammedFaadil/Pdf-to-quiz-System",
    coverImage: "/assets/projects/quiz-main.jpg",
    detailImages: [
      "/assets/projects/quiz-flow.jpg",
      "/assets/projects/quiz-ui.jpg"
    ]
  },
  {
    slug: "mindcare-ai-mental-health",
    title: "MindCare – AI Mental Health Support Platform",
    category: "AI/ML",
    shortDescription: "NLP-powered conversational assistant for emotion and sentiment detection. 1st Place Project Expo.",
    fullDescription: `An NLP-powered conversational assistant designed for emotion and sentiment detection to support mental health. This project won 1st Place at the College Project Expo.

The application features a secure Django backend for user session management and personalized recommendations. I integrated Machine Learning models to classify stress levels from user text and recommend tailored coping strategies. The entire system is built with scalable backend workflows to ensure reliable AI-based mental health support for numerous concurrent users.`,
    tags: ["Django", "NLP", "Machine Learning", "Python"],
    featured: false,
    award: "1st Place, Project Expo",
    themeColor: "teal",
    coverImage: "/assets/projects/mindcare-main.jpg",
    detailImages: [
      "/assets/projects/mindcare-chat.jpg",
      "/assets/projects/mindcare-analytics.jpg"
    ]
  },
  {
    slug: "deep-fake-detection",
    title: "Deep-Fake Detection System",
    category: "AI/ML",
    shortDescription: "CNN + transfer learning models for manipulated media detection and image classification.",
    fullDescription: `A deepfake and manipulated-media detection system built as a multi-model ensemble rather than a single classifier. Uploaded face images are run simultaneously through six different networks — ResNet50, EfficientNetB4, InceptionV3, MobileNetV2, and Xception via transfer learning, plus a custom-built CNN — and the final verdict is decided by majority vote across all six, with an averaged confidence score reported alongside each individual model's prediction.

The Streamlit interface lets a user upload a face image and see per-model labels (FAKE/REAL) and confidence scores rendered as interactive bar, pie, and line charts, then export the full analysis as a downloadable PDF report or XML file for documentation purposes. Combining five pretrained architectures with a custom CNN, rather than relying on any single model, was a deliberate choice to improve robustness against adversarial or unfamiliar manipulation techniques.`,
    tags: ["CNN", "TensorFlow", "Keras", "Transfer Learning", "Streamlit", "Python"],
    featured: false,
    themeColor: "rose",
    githubUrl: "https://github.com/MohammedFaadil/deepfake-detector",
    coverImage: "/assets/projects/deepfake-main.jpg",
    coverImageFit: "contain",
    detailImages: [
      "/assets/projects/deepfake-case1.jpg",
      "/assets/projects/deepfake-report.jpg"
    ]
  },
  {
    slug: "hackers-playground",
    title: "Hackers Playground",
    category: "Cybersecurity",
    shortDescription: "Gamified cybersecurity learning platform with real-world attack simulations.",
    fullDescription: `A gamified cybersecurity learning platform designed to teach practical security skills through real-world attack simulations.

The platform includes interactive security challenges that simulate real-world cyberattacks, allowing users to practice their skills in a safe environment. I developed the backend validation systems, scoring mechanisms, and quiz analytics to provide immediate feedback. The system also features detailed progress tracking and learning analytics, enabling users and educators to monitor performance in cybersecurity training.`,
    tags: ["Cybersecurity", "Full Stack Development", "Python"],
    featured: false,
    themeColor: "emerald",
    coverImage: "/assets/projects/hackers-main.jpg",
    detailImages: [
      "/assets/projects/hackers-workspace.jpg",
      "/assets/projects/hackers-leaderboard.jpg",
      "/assets/projects/hackers-speech.jpg",
      "/assets/projects/hackers-new.jpg"
    ]
  }
];

export const projectCategories = ["All", "AI/ML", "Backend", "Cybersecurity", "Full Stack"];
