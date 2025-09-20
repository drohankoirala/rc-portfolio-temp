# My Portfolio – Rohan Koirala

Welcome to my personal portfolio! This is a modern, fully responsive web application built with React, designed to showcase my skills, experience, and projects. I’ve structured everything for easy maintenance and scalability, so you can explore my work and background with ease.

## Features

- **Modular React Components:** Each section (Header, Main, About, Skills, Projects, Footer) is a separate component for clarity and reusability.
- **Dynamic Projects Section:** All my project and simple project data are stored in arrays and rendered dynamically. Click any project to see a popup with full details and images.
- **Responsive Design:** The site adapts beautifully to desktop and mobile screens.
- **Font Awesome Icons:** I use these for technology and social icons throughout the site.
- **Popup Modal:** You can view detailed project information and images in a modal window.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── source/ (images)
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   └── components/
│       ├── Header.js
│       ├── MainSection.js
│       ├── AboutSection.js
│       ├── SkillsSection.js
│       ├── ProjectsSection.js
│       ├── ModalSection.js
│       └── Footer.js
├── package.json
└── README.md
```

## Customization
- **Add/Edit Projects:** Update the `projects` and `simpleProjects` arrays in `ProjectsSection.js`.
- **Change Description/About:** Edit `AboutSection.js`.
- **Update Skills:** Edit `SkillsSection.js`.
- **Styling:** Modify CSS in `src/styles/style.css` and `src/styles/responsive.css`.

## Deployment
You can deploy this app to Vercel, Netlify, GitHub Pages, or any static hosting provider.

## License
This project is open source and available under the MIT License.

## About Me
I’m Rohan Koirala, a passionate developer and AI enthusiast. You can find more about me and connect here:
- [My Official Site](https://rohan-koirala.com.np)
- [LinkedIn](https://www.linkedin.com/in/drohankoirala)
- [GitHub](https://github.com/drohankoirala)

---

Feel free to fork, customize, and use this portfolio as a template for your own site. If you have any questions or want to collaborate, just reach out!
