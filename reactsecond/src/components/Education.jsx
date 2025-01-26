import { useEffect, useState } from 'react';
import './education.css'; // Import your CSS file

export const Education = () => {
  const [activeCard, setActiveCard] = useState(0);
  const data = [
    {
      title: "Schooling",
      description: "I completed my schooling at XYZ School, where I excelled in mathematics and science, scoring 90% in my final exams.",
      time: "2010 - 2015",
    },
    {
      title: "Intermediate",
      description: "In my intermediate years at ABC College, I majored in Physics and Computer Science, achieving an overall score of 85%.",
      time: "2015 - 2017",
    },
    {
      title: "B.Tech",
      description: "I pursued my B.Tech in Computer Science at DEF University, graduating with honors and securing a top 10% position in the class.",
      time: "2017 - 2021",
    },
    {
      title: "M.Tech",
      description: "Currently, I am working on my M.Tech in Artificial Intelligence, with a focus on Machine Learning. I have maintained a 9.5 GPA so far.",
      time: "2021 - 2023",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % data.length); // Cycle through the education data
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [data.length]);

  return (
    <div className="container">
      <div className="education-line"></div>

      {/* Knobs at junctions */}
      {data.map((_, index) => (
        <div
          className="knob"
          style={{ top: `${(index + 1) * 25}%` }}
          key={index}
        ></div>
      ))}

      <div className="card-container">
        {data.map((item, index) => (
          <div
            className={`${
              index % 2 === 0 ? "left-card" : "right-card"
            } ${activeCard === index ? "active" : ""}`}
            key={index}
          >
            <div className="card-body">
              <h4 className="title">{item.title}</h4>
              <h6>{item.time}</h6>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

