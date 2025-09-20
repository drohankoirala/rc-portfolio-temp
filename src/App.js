import React, { useEffect, useState, useRef } from "react";
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ModalSection from "./components/ModalSection";

export default function App() {
    const [modalProject, setModalProject] = useState(null);

    const handleProjectClick = (project) => {
        setModalProject(project);
    };

    const closeModal = () => {
        setModalProject(null);
    };

    return <React.Fragment>
        <div className="cover-me"></div>
        <section className="first-half">
            <Header />
            <MainSection />
        </section>
        <div className="divider" style={{ clipPath: "polygon(92% 24%, 100% 0, 0 0, 6% 26%, 47% 41%)" }}></div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onProjectClick={handleProjectClick} />
        <Footer />
        {modalProject && <ModalSection closeModal={closeModal} modalProject={modalProject} />}
    </React.Fragment>
}
