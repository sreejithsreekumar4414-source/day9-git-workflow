# Job Portal Kerala - Git Workflow Practice

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

A job portal application for Kerala built with React to practice Git workflow and version control.

**Developer:** Sreejith Sreekumar  
**Date:** February 2026  
**Internship:** Day 9 - Git & Workflow Practice

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Git Workflow](#git-workflow)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

This project is part of my 70-day React internship. Day 9 focuses on learning professional Git workflow including:
- Branching strategies
- Writing clear commit messages
- Creating pull requests
- Maintaining clean repository

---

## ✨ Features

- **Job Listings** - Browse jobs from Kerala companies
- **Search Functionality** - Search jobs by title
- **Filter Options** - Filter by location and company
- **Responsive Design** - Works on mobile and desktop
- **Clean UI** - Modern, professional interface

---

## 🛠️ Technologies

- **React 18.2.0** - Frontend library
- **Vite 5.0.8** - Build tool
- **CSS3** - Styling
- **Git** - Version control

---

## 📦 Installation

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/sreejithsreekumar4414-source/day9-git-workflow.git
```

2. **Navigate to project directory**
```bash
cd day9-git-workflow
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

---

## 🚀 Usage

### Running the App

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment

No environment variables required for this project.

---

## 🌿 Git Workflow

This project follows a feature branch workflow:

### Branch Strategy

- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes

### Commit Message Format

```
type: brief description

- Detailed explanation if needed
- What changed and why
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests

### Example Commits

```bash
feat: add search functionality

- Added SearchBar component
- Implemented search filter logic
- Updated JobList to use filtered results
```

---

## 📁 Project Structure

```
day9-git-workflow/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobList.jsx
│   │   └── SearchBar.jsx
│   ├── pages/           # Page components
│   │   └── HomePage.jsx
│   ├── assets/          # Images, styles
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

## 🤝 Contributing

This is a personal learning project, but feedback is welcome!

### How to Contribute

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 License

This project is created for educational purposes as part of React internship training.

---

## 👤 Author

**Sreejith Sreekumar**

- GitHub: [@sreejithsreekumar4414-source](https://github.com/sreejithsreekumar4414-source)
- Project: Day 9/70 - React Internship

---

## 🙏 Acknowledgments

- React Documentation
- Vite Documentation
- Kerala Tech Community

---

## 📈 Project Status

✅ Day 9 Complete - Git & Workflow  
🚀 Next: Day 10

---

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Job+Portal+Kerala)

### Job Listings
![Job Listings](https://via.placeholder.com/800x400?text=Job+Listings)

---

Made with ❤️ in Kerala
