export const Projects = () => {
    const projectData = [
        {
            title: "Supabase Clone",
            description: "A fully responsive clone of the Supabase website using HTML, CSS",
            demoLink: "https://codepen.io/kishorelavuri/pen/yLdpgmX12",
            githubLink: "https://github.com/kishorebabulavuri12",
            bannerClass: "banner-image",
        },
        {
            title: "Portfolio",
            description:
                "I designed a fully responsive portfolio website using HTML, CSS, and JavaScript, showcasing my skills and projects with a modern and user-friendly interface.",
            demoLink: "https://youtube.com12",
            githubLink: "https://github.com/kishorebabulavuri12",
            bannerClass: "banner-image1",
        },
    ];

    return (
        <div className="project" id="project" style={{ color: "#ffffff" }}>
            {/* <h2
                className="project-title"
                style={{
                    marginBottom: "8%",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                PROJECTS
            </h2> */}
            <h2 className="skills-title" style={{marginLeft:'43%'}}>My - Projects</h2>
            {projectData.map((project, index) => (
                <div className="project-container" key={index}>
                    <div className="wrapper">
                        <div className={project.bannerClass}> <img src="p1.png" alt="" /></div>
                        <h2
                            style={{
                                fontFamily: "'Righteous', sans-serif",
                                color: "rgba(255, 255, 255, 0.98)",
                                textTransform: "uppercase",
                                fontSize: "2rem",
                                margin: "20px 0",
                            }}
                        >
                            {project.title}
                        </h2>
                        <p
                            style={{
                                color: "#fff",
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "1rem",
                                lineHeight: "1.5",
                                letterSpacing: "1px",
                            }}
                        >
                            {project.description}
                        </p>
                    </div>
                    <div className="button-wrapper">
                        <button className="btn outline">
                            <a
                                href={project.demoLink}
                                style={{ textDecoration: "none", color: "#fcfcfc" }}
                            >
                                VIEW DEMO
                            </a>
                        </button>
                        <button className="btn fill">
                            <a
                                href={project.githubLink}
                                style={{ textDecoration: "none", color: "#fcfcfc" }}
                            >
                                GITHUB
                            </a>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
