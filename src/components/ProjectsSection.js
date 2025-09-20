import React from 'react';

const projects = [
    {
        title: 'ToolsTol – The Ultimate Online Tools Hub',
        images: [
            './source/Screenshot from 2025-05-04 09-41-01.png',
            './source/Screenshot from 2025-05-04 09-40-56.png',
            './source/Screenshot from 2025-05-04 09-41-17.png',
            './source/Screenshot from 2025-05-04 09-43-58.png',
        ],
        description:
            'ToolsTol is a unified platform built for makers who value speed, clarity, and zero fluff. Whether you’re a developer, designer, or digital creator, you shouldn’t waste time jumping across random sites for simple tasks. So, we brought everything under one roof.\n\nFrom Image Resizer and Converter (with 8+ formats), to QR Code Generator, Markdown to HTML, Case Converter, Meta Tag Generator, Schema Markup Generator, Base64 Encoder/Decoder, and JSON Formatter — every tool is built to be fast, reliable, and dead simple.\n\nTech stack? Next.js and Tailwind CSS at the core — minimal load, clean UI, and modular design. No logins. No pop-ups. No nonsense.\n\ntoolstol.com isn’t a side-project vibe. It’s a focused utility hub — built to save time and cut friction. Use it, bookmark it, forget the rest.',
        tags: ['Next.js', 'Tailwind CSS', 'API2Convert', 'Sapling', 'Flask', 'Vercel'],
        link: { url: 'https://toolstol.com', text: 'View ToolsTol' },
    },
    {
        title: 'HapyNotes - A Awesome website for your notes.',
        images: [
            './source/Screenshot from 2024-08-11 21-25-01.com.png',
            './source/Screenshot from 2024-08-11 21-32-44.com.png',
            './source/Screenshot from 2024-08-11 21-34-32.com.png',
            './source/Screenshot from 2024-08-11 21-36-02.com.png',
        ],
        description:
            "HapyNotes was built using Next.js, Firebase Authentication, and Firebase Database. The website has 10+ slugs, utilizing Next.js's Page Routing. Three of these slugs implement the Static Site Generation (SSG) methodology to render content dynamically. Whenever a change request is made by a Creator[Site to upload content in HapyNotes], the server re-renders and updates the page content, enhancing the site's SEO friendliness. The site also includes features like authentication for liking posts and comments, a personalized feed, and more. Additionally, it has a recommendation system that ensures users receive the best content tailored to their preferences and more features.",
        tags: ['Next.js', 'Firebase', 'Flask', 'ML', 'SEO'],
        link: { url: 'https://hapynotes.rohan-koirala.com.np/', text: 'View Online' },
    },
    {
        title: 'Fraud Detection - Detect suspicious transactions in real-time.',
        images: [
            './source/Screenshot from 2025-05-04 09-56-23.png',
            './source/Screenshot from 2025-05-04 09-56-26.png',
        ],
        description:
            'FraudGuard is a web application designed to detect and prevent fraudulent transactions using machine learning. The app is built with Streamlit, which allows for quick, interactive interfaces for visualizing and analyzing data. It employs an MLP (Multi-Layer Perceptron) model to classify transactions as suspicious or legitimate based on historical transaction data. The backend processes data using Pandas, making it easy to manipulate and analyze large datasets efficiently. Visualizations help to identify patterns and detect outliers, aiding in the real-time detection of fraud. This combination of technologies ensures that FraudGuard is both powerful and user-friendly, offering reliable fraud detection with an intuitive interface.',
        tags: ['Machine Learning', 'MLP', 'Data Visualization', 'Pandas', 'Streamlit'],
        link: { url: 'https://www.linkedin.com/posts/drohankoirala_gime-gimehackathone2025-hackathon2025-activity-7324336915896303616-dKyy', text: 'View On LinkedIn' },
    },
    {
        title: 'NeuroVision - Tumor Detector',
        images: [
            './source/Screenshot from 2024-12-01 18-04-49.png',
            './source/Screenshot from 2024-12-01 18-04-54.png',
            './source/Screenshot from 2024-12-01 18-04-58.png',
            './source/Screenshot from 2024-12-01 18-05-09.png',
            './source/Screenshot from 2024-12-01 18-05-15.png',
            './source/Screenshot from 2024-12-01 18-05-23.png',
            './source/Screenshot from 2024-12-01 18-06-09.png',
            './source/Screenshot from 2024-12-01 18-06-14.png',
        ],
        description:
            'NeuroVision is a sophisticated web application designed to assist in tumor detection and prediction by combining advanced front-end frameworks, robust backend support, and machine learning capabilities. The front-end is built using Tailwind CSS for a clean, responsive, and visually appealing design, ensuring a seamless user experience across various devices. It also utilizes Next.js, a React-based framework, to provide dynamic components, server-side rendering (SSR), and static site generation (SSG), enhancing performance and interactivity. On the backend, Flask, a lightweight Python web framework, handles server-side logic, enabling smooth communication between the front end and the ML model. The core functionality is driven by a machine learning model that detects tumor types and predicts metadata such as patient age and tumor location. This integration of modern technologies ensures that NeuroVision is both powerful and user-friendly, offering precise and actionable insights for medical applications.',
        tags: ['Next.js', 'TensorFlow', 'Flask'],
        link: { url: 'https://www.linkedin.com/posts/bigyanshrestha_startup-nepalchamber-sunwayforai-ugcPost-7290744058686095362-FN7G', text: 'View On LinkedIn' },
    },
    {
        title: 'Creator - A site to upload content in HapyNotes',
        images: [
            './source/Screenshot from 2024-08-11 21-39-46.com.png',
            './source/Screenshot from 2024-08-11 21-38-18.com.png',
            './source/Screenshot from 2024-08-11 21-41-02.com.png',
        ],
        description:
            "Creator was built using react.js, Firebase Authentication, and Firebase Database. The website's aim was to redirect creators to different website.",
        tags: ['React', 'Firebase'],
        link: { url: 'https://creator.hapynotes.rohan-koirala.com.np/', text: 'View Online' },
    },
    {
        title: 'DRK Player - Player which recommend songs',
        images: [
            './source/Screenshot from 2024-08-11 21-42-38.com.png',
            './source/Screenshot from 2024-08-11 21-43-58.com.png',
            './source/Screenshot from 2024-08-11 21-45-03.com.png',
        ],
        description:
            "While listening music on YouTube i found YT algorithm is not working fine for me, So as a ML project i build a Recommendation Engine. Combination of React, Flask, ML",
        tags: ['React', 'Flask', 'ML'],
        link: { url: 'https://github.com/drohankoirala/python-music-player', text: 'View Online' },
    },
    {
        title: 'SToller - A platform to generate kids story on prompt',
        images: [
            './source/Screenshot from 2025-05-04 09-26-25.png',
        ],
        description:
            "Stoller is where storytelling meets tech muscle. A kid gives a prompt we build a full-blown story around it. Not generic. Not recycled. Unique, imaginative, and wild just like a kid’s brain. And we don’t stop at text. With Gemini, we generate images that slap turning stories into full visual adventures.\n\nBuilt on Next.js and Tailwind CSS for speed and flow. Story logic runs on LLaMA 3.3, supercharged with Groq API for near instant generation. LangChain handles the chain of thought literally managing prompts, context memory, and character flow. Every piece talks to each other like clockwork.\n\nThis isn’t just a toy. It’s a platform that fuels curiosity, creativity, and cognitive stretch. Stoller makes kids creators not just consumers.",
        tags: ['Next.js', 'Tailwind CSS', 'LLaMA 3.3', 'Groq API', 'Gemini API', 'LangChain'],
        link: { url: 'https://www.linkedin.com/posts/drohankoirala_langchain-llm-llama-activity-7320432545135788032-9OV7', text: 'View On LinkedIn' },
    },
    {
        title: 'DeBite - A platform for debaters',
        images: [
            './source/Screenshot from 2025-02-11 12-15-36.png',
            './source/Screenshot from 2025-02-11 12-15-40.png',
            './source/Screenshot from 2025-02-11 12-15-46.png',
            './source/Screenshot from 2025-02-11 12-15-52.png',
            './source/Screenshot from 2025-02-11 12-16-01.png',
            './source/Screenshot from 2025-02-11 12-16-11.png',
        ],
        description:
            'DeBite is a platform built with Next.js, Firebase, and Tailwind CSS, providing high-quality Parliamentary Debate transcripts with minimal yet insightful analysis. It allows users to explore and analyze real debate transcripts, helping them identify effective argumentation strategies and refine their debating skills. By focusing on practical learning through real examples, DeBite serves as a valuable resource for debaters looking to improve.',
        tags: ['Next.js', 'Tailwind', 'Firebase'],
        link: { url: 'https://debite.org/', text: 'View Online' },
    },
    {
        title: 'The World Of Wagers (The WoW) - Play in the World as You Do in Games.',
        images: [
            './source/Screenshot from 2025-02-11 12-28-55.png',
            './source/Screenshot from 2025-02-11 12-29-01.png',
            './source/Screenshot from 2025-02-11 12-29-05.png',
            './source/Screenshot from 2025-02-11 12-29-15.png',
            './source/Screenshot from 2025-02-11 12-29-24.png',
            './source/Screenshot from 2025-02-11 12-29-34.png',
            './source/Screenshot from 2025-02-11 12-30-27.png',
            './source/Screenshot from 2025-02-11 12-30-50.png',
        ],
        description:
            "The WoW is an online eSports platform built with Next.js, Flask, Firebase, Next-Auth, and Tailwind CSS, offering a seamless gaming experience. It features integrated Khalti and eSewa payment gateways for secure transactions. Players can create and join tournaments, competing for exciting prize pools. With real-time data, secure authentication, and a sleek UI, The WoW aims to be a go-to platform for competitive gaming.\n\n|- Site is no Longer Active -|",
        tags: ['Next.js', 'Tailwind', 'Firebase'],
        link: { url: 'https://theworldofwagers.com/', text: 'View Online' },
    },
    {
        title: 'Movie Mania - A site for movie review and more [BETA]',
        images: [
            './source/Screenshot from 2024-08-12 10-34-18.png',
            './source/Screenshot from 2024-08-12 10-38-04.png',
            './source/Screenshot from 2024-08-12 10-39-51.png',
            './source/Screenshot from 2024-08-12 10-42-02.png',
        ],
        description:
            'Movie Mania is built using Next.js, Next-Auth, MongoDB, Tailwind, and Flask. The site leverages the Page route of Next.js 14 and includes 7+ slugs, such as /search, /cast, and /director. Next-Auth handles user session management. The data is powered by Wikipedia, with a custom movie metadata scraper that extracts and prepares data from Wikipedia for display on Movie Mania. The site also features 3+ SSG slugs for dynamic content generation for SEO, with additional features to come.',
        tags: ['Next.js', 'Flask', 'Web Scraping', 'Tailwind', 'MongoDB'],
        link: { url: 'https://github.com/drohankoirala/wikipedia-movie-metadata-scraper', text: 'View Scraper' },
    },
    {
        title: 'DRK-Store - A Ecommerce store [BETA]',
        images: [
            './source/Screenshot from 2024-08-12 16-47-17.png',
            './source/Screenshot from 2024-08-12 16-46-57.png',
            './source/Screenshot from 2024-08-12 16-47-30.png',
            './source/Screenshot from 2024-08-12 16-57-31.png',
            './source/Screenshot from 2024-08-12 16-58-06.png',
            './source/Screenshot from 2024-08-12 16-58-29.png',
            './source/Screenshot from 2024-08-12 16-58-46.png',
            './source/Screenshot from 2024-08-12 16-58-58.png',
            './source/Screenshot from 2024-08-12 16-59-56.png',
        ],
        description:
            'DRK-Store is developed using Next.js 14, Next-Auth, MongoDB, Tailwind, and Flask. The site utilizes the Page routing feature of Next.js, incorporating over 10 dynamic slugs such as /pro, /cat, and /search. Next-Auth is employed for efficient session management. The Flask server handles data requests from the client, retrieving information from MongoDB. Additionally, the site includes 2+ static pages generated with SSG (Static Site Generation) for SEO purposes. Advanced search functionality allows for sorting and filtering of products. An admin panel is available for administrators to update, add, or delete products. --| Currently, the site is in Test mode and contains random content for testing purposes |--.',
        tags: ['Next.js', 'Flask', 'Tailwind', 'MongoDB'],
        link: null,
    },
];

const simpleProjects = [
    {
        title: 'Simple Regx calculator',
        description: 'I made this while learning regular expression. I found regx awesome so i thought lets create something from this, so i build this project',
        tags: ['Python', 'Regx'],
        link: { url: 'https://github.com/drohankoirala/regx-calculator', text: 'View Online' },
    },
    {
        title: 'Tic Tac Toe Game using ML',
        description: "I made this while learning ML using tensorflow. I build this to replace my friend's need while playing.",
        tags: ['Python', 'Regx'],
        link: { url: 'https://github.com/drohankoirala/ml-tic-tac-toe', text: 'View Online' },
    },
    {
        title: 'Google Meet attendance tracker',
        description: "While learning web-scraping from selenium i found it could be helpful to my teachers to track student attendance during online class. So i build this project but after learning more i found it's too easy to build chrome extension and to manupulate DOM element.",
        tags: ['Python', 'Selenium', 'Web Scraping'],
        link: null,
    },
    {
        title: 'Virtual Assistant',
        description: "While learning python, I watched a tutorial about Virtual Assistant. So i build it using simple if-else statement and speech-recognition library, like for 'play song' -> 'os.startfile('.mp3')', i gave more than 100+ conditions and made it.",
        tags: ['Python', 'speech-recognition'],
        link: null,
    },
];

const ProjectsSection = ({ onProjectClick }) => (
    <section className='show-case'>
        <section className="container --slideIN" id="projects" style={{ maxWidth: "100%" }}>
            <h2 className="section-title">Projects</h2>
            <div className="projects">
                {projects.map((project, idx) => (
                    <div
                        className="project"
                        id="project_item"
                        key={idx}
                        onClick={() => onProjectClick(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        {project.images.map((img, i) => (
                            <img
                                src={img}
                                alt="Project Image"
                                className="project_images"
                                key={i}
                                style={{ display: i === 0 ? "block" : "none" }}
                            />
                        ))}
                        <div className="project-info">
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-desc'>{project.description.substring(0, 200)}...</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                                {project.link && (
                                    <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                                        {project.link.text}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="divider-sim">
                <p>Some projects i did during learning phase.</p>
            </div>
            <div className="projects projects-simple">
                {simpleProjects.map((project, idx) => (
                    <div
                        className="project project-simple"
                        id="project_item"
                        key={idx}
                        onClick={() => onProjectClick(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="project-info">
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-desc'>{project.description.substring(0, 150)}...</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                                {project.link && (
                                    <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                                        {project.link.text}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </section>
);

export default ProjectsSection;
