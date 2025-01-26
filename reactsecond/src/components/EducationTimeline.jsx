import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./education.css";

const educationData = [
  {
    title: "Schooling",
    description: "Attended RSR Muncipal High School, and completed ssc with  100% in the final exams.",
    duration: "2015 - 2020",
  },
  {
    title: "Intermediate",
    description: "Completed at Rajiv Gandhi University Of Knowledge And Technologies, scored 96%.",
    duration: "2021 - 2022",
  },
  {
    title: "B.Tech",
    description: "Graduating in Computer Science from Rajiv Gandhi University Of Knowledge And Technologies",
    duration: "2022 - 2026",
  },
];

const EducationTimeline = () => {
  useEffect(() => {
    ScrollReveal().reveal(".timeline-item", {
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
    });
    ScrollReveal().reveal(".timeline-line", {
      duration: 1500,
      scale: 1,
      opacity: 0,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="skills"  id="education" >
        <h2 className="skills-title">Education</h2>
      </div>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-card">
              <div className="timeline-duration">{item.duration}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationTimeline;
