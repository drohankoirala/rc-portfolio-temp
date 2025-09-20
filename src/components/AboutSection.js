import React from 'react';

const AboutSection = () => (
    <section className='middle-half'>
        <section className="container --slideIN" id="about">
            <h2>Description</h2>
            <p className="content">
                {/* ...existing description text from index.html... */}
                With over three years of experience in web development, I have honed my skills in building robust and scalable APIs using Flask, and creating visually appealing and user-friendly interfaces with Next.js and React. My expertise extends to database integration, ensuring seamless data management and storage solutions. I have a strong foundation in Python, with four years of experience, allowing me to develop efficient back-end systems and automate complex workflows.
                <br /><br />
                In addition to web development, I have specialized knowledge in machine learning, with over a year of experience. This includes developing recommendation systems, data analysis, and predictive modeling. My work in this area has involved creating custom algorithms and integrating machine learning models into web applications to provide personalized user experiences.
                <br /><br />
                My proficiency in JavaScript complements my Python skills, enabling me to build full-stack applications with rich, interactive features. I am adept at using modern frameworks and libraries to enhance front-end development, ensuring that applications are not only functional but also intuitive and engaging.
                <br /><br />
                Passionate about technology and always eager to learn, I continuously explore new tools and methodologies to stay at the forefront of the industry. My commitment to professional growth is reflected in my ability to adapt to the ever-evolving tech landscape, making me a versatile and resourceful developer. Whether it's working on a complex back-end system, crafting a stunning user interface, or implementing advanced machine learning solutions, I approach each project with dedication and a drive to exceed expectations.
            </p>
        </section>
        <div class="divider" style={{ backgroundColor: "#ddd", clipPath: "polygon(21% 86%, 0 100%, 100% 100%)" }}></div>
    </section>
);

export default AboutSection;
