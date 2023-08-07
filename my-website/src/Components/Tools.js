import React, { useRef } from "react";

const Tools = () => {
    return (
        <section className="tools">
            <div className="tools__container">
                <h2 className="tools__header">My tools</h2>
                <p className="tools__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            <div className="tools__box">
          <a
            className="tools__tool"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://reactjs.org/"
            target="blank"
          > </a>
          <a
            className="tools__tool"
            href="https://babeljs.io/docs/en/"
            target="blank"
          > </a>
        </div>
            </div>
        </section>
    )
}

export default Tools;