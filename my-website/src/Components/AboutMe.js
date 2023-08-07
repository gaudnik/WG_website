import React from "react";

const AboutMe = () => {
    
    return (
        <section className="aboutme" id="aboutme">
            <div className="aboutme__image"></div>
            <div className="aboutme__description">
                <h2>About Me</h2>
                <p className="aboutme__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a
                    className="button"
                    href="https://www.linkedin.com/in/wojciech-gaudnik/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-brown">Open my LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

export default AboutMe;