# 💰 Demo_WebApp - Interest Calculator

This is a simple web application that calculates interest using a clean, modular JavaScript architecture. It includes CI/CD integration using Azure Pipelines and is structured for maintainability and scalability.

---

## 🚀 Features

- Calculate interest based on user input
- Modern JavaScript (ES6+) and modular code
- Unit tested with Jest
- Integrated CI/CD pipeline using Azure Pipelines
- Ready for deployment

---

## 📁 Project Structure

```
Demo_WebApp/
│
├── dist/                       # Compiled output
│   ├── dom.js
│   ├── dom.js.map
│   ├── index.html
│   ├── script.js
│   ├── script.js.map
│   ├── style.css
│
├── interest_calculator/       # (Future scoped directory)
│
├── node_modules/              # Node.js packages
│
├── src/                       # Source files
│   ├── dom.js
│   ├── script.js
│   ├── style.css
│   ├── index.html
│   ├── script.test.js
│   ├── jest.config.cjs
│   ├── .babelrc
│   ├── babel.config.js
│
├── .github/workflows/         # GitHub workflows (optional)
│   └── ci.yml
│
├── .eslintrc.js               # Linting config
├── .gitignore
├── azure-pipelines.yml        # Azure Pipelines config
├── eslint.config.mjs
├── package.json
├── package-lock.json
└── README.md                  # You're here!
```

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/83197aditya/Demo_WebApp.git
cd Demo_WebApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npx serve dist
```

### 4. Run Tests

```bash
npm test
```

---

## 🔁 CI/CD with Azure Pipelines

- The pipeline is configured in `azure-pipelines.yml`.
- Automatically installs, builds, and tests the application on push.

---

## 🧰 Tech Stack

- JavaScript (ES6+)
- HTML/CSS
- Jest (for testing)
- Babel (for transpiling)
- Azure Pipelines (for CI/CD)
- ESLint

---

## 📬 Contact

Maintained by [Aditya Vishwakarma](https://github.com/83197aditya).

Feel free to contribute, suggest improvements, or report issues.
