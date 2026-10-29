# 🌳 LearnLayer

**LearnLayer** is a premium, interactive roadmap platform designed to help developers master technology skills through structured learning paths, curated resources, interactive quizzes, and hands-on projects.

Built with **Next.js 15, React 19, TypeScript, and Tailwind CSS**, LearnLayer delivers a Duolingo-inspired learning experience with animated interfaces, instant quiz feedback, code snippets, and local progress tracking — without requiring a backend.

![LearnLayer Banner](https://placehold.co/1200x400/0B1120/22C55E?text=LearnLayer+-+Master+Tech+Skills)

## ✨ Features

- **Interactive Roadmaps:** Follow structured, step-by-step learning paths for Data Science, AI/ML, Full Stack Development, Database Administration, and Linux.
- **Curated Learning Resources:** Discover high-quality free resources from platforms such as Harvard CS50, Kaggle, and LeetCode.
- **Interactive Quizzes:** Test your understanding with multiple-choice questions, instant feedback, and detailed explanations.
- **Copyable Code Blocks:** Explore code examples with syntax highlighting and one-click copy functionality.
- **Hidden Q&A:** Challenge yourself before revealing answers with interactive show/hide controls.
- **Local Progress Tracking:** Save completed lessons using browser `localStorage` and unlock capstone projects as you progress.
- **Premium UI/UX:** Enjoy a modern dark theme, animated SVG graphics, smooth transitions, and responsive layouts.
- **Backend-Free Architecture:** Track learning progress locally without requiring user accounts or a dedicated database.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework and App Router |
| [React 19](https://react.dev/) | UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Motion](https://motion.dev/) | Animations and transitions |
| [MDX](https://mdxjs.com/) | Markdown-based learning content with JSX |
| [Lucide React](https://lucide.dev/) | Icons |

## 📚 Available Learning Paths

LearnLayer is designed to support multiple technology roadmaps, including:

- **Data Science:** Python, statistics, data analysis, visualization, and machine learning.
- **Artificial Intelligence and Machine Learning:** Core AI concepts, model development, evaluation, and practical projects.
- **Full Stack Development:** Frontend development, backend APIs, databases, authentication, and deployment.
- **Database Administration:** SQL, database design, query optimization, and administration fundamentals.
- **Linux:** Command-line tools, shell scripting, permissions, system administration, and networking fundamentals.

*The actual availability of each roadmap depends on the modules included in the repository.*

## 🚀 Getting Started

Follow these instructions to run LearnLayer locally.

### Prerequisites

Install the following before starting:

- [Node.js](https://nodejs.org/) — use a version supported by your project's Next.js dependencies.
- npm, which is included with Node.js.
- Git.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/iamthearafatkhan/learnlayer.git
```

**2. Navigate to the project directory**

```bash
cd learnlayer
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build, run:

```bash
npm run build
npm run start
```

## 📂 Project Structure

The following is an example of the intended content organization. Your actual source structure may differ.

```text
learnlayer/
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable UI components
├── content/
│   ├── modules/             # MDX learning modules
│   │   ├── python/
│   │   ├── machine-learning/
│   │   └── full-stack/
│   └── roadmaps/            # Roadmap JSON definitions
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

*This structure is illustrative. Keep the paths consistent with your actual repository.*

## 🤝 Contributing

Contributions are welcome! LearnLayer follows a **curator model**: contributors focus on selecting high-quality learning resources, writing useful knowledge checks, and proposing practical projects rather than producing unnecessarily long tutorials.

### Add a New Learning Module

**Step 1: Create a module directory**

Navigate to `content/modules/` and create a folder for your topic.

For example:

```text
content/modules/rust/
```

**Step 2: Create an MDX lesson**

Create `01-intro.mdx` inside the new folder.

```mdx
---
title: "Introduction to Rust"
order: 1
moduleTitle: "Rust Programming"
moduleDescription: "A language empowering everyone to build reliable and efficient software."
---

# Introduction to Rust

Rust is a systems programming language focused on performance and memory safety.

## 🎯 Core Concepts to Master

- Ownership and borrowing
- Structs and enums
- Error handling with `Result` and `Option`

## 📚 The Golden Path

1. [The Rust Programming Language](https://doc.rust-lang.org/book/) — The official Rust book.
2. [Rustlings](https://github.com/rust-lang/rustlings) — Hands-on exercises for learning Rust.

<Quiz
  question="Which feature is central to Rust's memory safety?"
  options={[
    { text: "Garbage collection", isCorrect: false },
    { text: "Ownership and borrowing", isCorrect: true },
    { text: "Manual memory management only", isCorrect: false }
  ]}
  explanation="Rust uses ownership and borrowing rules to ensure memory safety without requiring a garbage collector."
/>

## 🏆 Portfolio Project

Build a command-line application that searches for a string inside a file, similar to `grep`.

Your project should support:

- Accepting a file path and search term.
- Finding matching lines.
- Reporting useful errors for missing files.
- Adding tests for different search scenarios.
```

**Important:** The `<Quiz />` component must be implemented and supported by your MDX configuration. If your project uses a different quiz API, adapt the example to match the existing component.

**Step 3: Register the module in a roadmap**

Edit the relevant file in `content/roadmaps/`. For example, a roadmap might contain:

```json
{
  "slug": "full-stack",
  "title": "Full Stack Developer",
  "description": "Learn frontend development, backend engineering, and databases.",
  "steps": [
    {
      "moduleSlug": "html-css",
      "label": "HTML, CSS, and JavaScript"
    },
    {
      "moduleSlug": "rust",
      "label": "Rust Backend Fundamentals"
    }
  ]
}
```

Make sure the referenced module exists and that the roadmap follows the schema expected by the application.

**Step 4: Test your contribution**

Run the available checks before submitting your changes.

```bash
npm run build
```

If your project defines linting or testing scripts, run those too.

**Step 5: Submit a pull request**

1. Fork the repository on GitHub.
2. Create a feature branch.
3. Add your module and roadmap changes.
4. Commit and push your changes.
5. Open a pull request describing your contribution.

Example commands:

```bash
git checkout -b feat/add-rust-module
git add .
git commit -m "feat: add Rust learning module"
git push origin feat/add-rust-module
```

Then open a pull request from your fork on GitHub.

## 🗺️ Roadmap for the Project

Potential future improvements include:

- Additional technology roadmaps and learning modules.
- More interactive quizzes and coding exercises.
- Improved progress visualization and achievement systems.
- Bookmarks and personalized learning paths.
- Search and filtering across learning resources.
- Optional cloud synchronization for learning progress.

These are potential enhancements, not claims that the features are already implemented.

## 📄 License

This project is intended to use the MIT License. See the [`LICENSE`](LICENSE) file for the license terms.

If the repository does not yet contain a `LICENSE` file, add the MIT license before describing the project as officially licensed under MIT.

## 👨‍💻 Author

**Arafat Khan**

- GitHub: [@iamthearafatkhan](https://github.com/iamthearafatkhan)

---

**LearnLayer — Learn with direction. Build with purpose.**
