export const projectsData = [
  {
    slug: "pdf-to-ai-adaptive-quiz",
    title: "PDF to AI Adaptive Quiz Generation System",
    category: "AI/ML",
    shortDescription: "Built an AI-driven platform converting PDFs into adaptive quizzes using NLP and semantic chunking.",
    fullDescription: `Built an AI-driven platform converting PDFs into adaptive quizzes using NLP and semantic chunking. The system processes educational documents and dynamically creates questions tailored to the user's learning pace.

I designed FastAPI backend services for quiz generation, scoring, and performance tracking. The adaptive learning logic adjusts question difficulty in real-time based on user responses, providing a personalized learning experience. Automated question generation workflows were implemented using state-of-the-art AI/NLP models to ensure high-quality and relevant assessments.`,
    tags: ["FastAPI", "NLP", "Python", "Docker"],
    featured: true,
    themeColor: "indigo",
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
    featured: true,
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
    fullDescription: `A comprehensive deep learning system for identifying manipulated media and synthetic content. 

This project utilizes Convolutional Neural Networks (CNN) and transfer learning models for manipulated media detection and image classification. I applied ensemble learning techniques to significantly improve detection accuracy and robustness against adversarial inputs. The system includes a real-time media upload and authenticity verification interface, supported by efficient AI-based media analysis pipelines for detecting synthetic content on the fly.`,
    tags: ["CNN", "TensorFlow", "Python", "Deep Learning"],
    featured: true,
    themeColor: "rose",
    coverImage: "/assets/projects/deepfake-main.jpg",
    detailImages: [
      "/assets/projects/deepfake-model.jpg",
      "/assets/projects/deepfake-results.jpg"
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
      "/assets/projects/hacker-new.jpg"
    ]
  }
];

export const projectCategories = ["All", "AI/ML", "Backend", "Cybersecurity", "Full Stack"];
