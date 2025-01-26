import { useState, useEffect } from "react";

export const Certificates = () => {
    const certificates = [
        {
            imgSrc: "https://i.postimg.cc/k4tD6k4Q/meta.png",
            title: "Programming with JavaScript",
        },
        {
            imgSrc: "https://i.postimg.cc/Qxg9qGqS/infosys.png",
            title: "HTML 5",
        },
        {
            imgSrc: "https://i.postimg.cc/sDkSK5k4/example.png",
            title: "React Basics",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [certificates.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + certificates.length) % certificates.length
        );
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="Certification" id="certificates">
            <h2 style={{marginLeft:'43%'}} className="project-tittle">CERTIFICATES</h2>
            <div className="slider">
                <div className="slides">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentIndex ? "active" : ""}`}
                            style={{
                                display: index === currentIndex ? "block" : "none", // Show only the active slide
                            }}
                        >
                            <img src={cert.imgSrc} alt={cert.title} />
                            <div className="text">{cert.title}</div>
                        </div>
                    ))}
                </div>
                {/* Navigation buttons */}
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>

                {/* Indicator dots */}
                <div className="dot-container">
                    {certificates.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => setSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};
