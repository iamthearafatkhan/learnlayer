# 🌳 LearnLayer

**LearnLayer** is a premium, interactive, and animated roadmap platform for mastering tech skills. Built with Next.js 15, React 19, and Tailwind CSS, it provides a Duolingo-style learning experience with interactive quizzes, copy-paste code blocks, and local progress tracking—all without needing a backend.

![LearnLayer Banner](https://via.placeholder.com/1200x400/0B1120/22C55E?text=LearnLayer+-+Master+Tech+Skills)

## ✨ Features

- **Interactive Roadmaps:** Step-by-step visual paths for Data Science, AI, Full Stack, DBA, and Linux.
- **Curator Model Curriculum:** Deep-dives into the best free resources on the internet (Harvard CS50, Kaggle, LeetCode).
- **Interactive Quizzes:** Multiple-choice questions with instant green/red feedback and explanations.
- **Copy-Paste Code Blocks:** Sleek dark-mode code snippets with a single-click copy button.
- **Hidden Q&A:** "Show Answer" toggles to test your knowledge before revealing the truth.
- **Local Progress Tracking:** Uses browser `localStorage` to save completed lessons and unlock Capstone Projects.
- **Premium UI/UX:** Animated SVGs, smooth page transitions, and a beautiful dark theme.

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Content:** [MDX](https://mdxjs.com/) (Markdown + JSX)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iamthearafatkhan/learnlayer.git
   cd learnlayer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **npm run dev**
Open http://localhost:3000 in your browser.

---

## 🤝 How to Contribute (Add a New Topic)

We use a Curator Model. You don't need to write a 10,000-word essay. You just need to curate the best 2-3 resources for a topic, write a quiz, and add a project.

Here is how to add a new module in 5 minutes:

1. **Create the Module Folder**
Navigate to content/modules/ and create a new folder (e.g., rust or cybersecurity).

2. **Create the Markdown File**
Inside that folder, create a file named 01-intro.mdx. Paste this template:
   ```mdx
   ---
title: "Introduction to Rust"
order: 1
moduleTitle: "Rust Programming"
moduleDescription: "A language empowering everyone to build reliable and efficient software."
---

# Introduction to Rust

Rust is a systems programming language focused on safety and performance.

## 🎯 Core Concepts to Master
- Ownership and Borrowing
- Structs and Enums
- Error Handling (Result & Option)

## 📚 The Golden Path (Free Resources)
1. **[The Rust Book](https://doc.rust-lang.org/book/)**: The official, free book.
2. **[Rustlings](https://github.com/rust-lang/rustlings)**: Small exercises to get you used to reading and writing Rust code.

<Quiz
  question="What is Rust's most unique feature for memory safety?"
  options={[
    { text: "Garbage Collection", isCorrect: false },
    { text: "Ownership and Borrowing", isCorrect: true },
    { text: "Manual Pointers", isCorrect: false }
  ]}
  explanation="Rust uses a unique ownership system to manage memory without a garbage collector."
/>

## 🏆 Portfolio Project
Build a Command Line Interface (CLI) tool that searches for a string inside a file, similar to `grep`.
   ```
3. **Update the Roadmap JSON**
Go to content/roadmaps/ and create or edit a roadmap to link your new module. For example, in full-stack.json:
   ```json
   {
  "slug": "full-stack",
  "title": "Full Stack Web Developer",
  "description": "Master frontend, backend, and databases.",
  "steps": [
    { "moduleSlug": "html-css", "label": "HTML, CSS & JS" },
    { "moduleSlug": "rust", "label": "Rust Backend" } // <-- Your new module!
  ]
}
   ```