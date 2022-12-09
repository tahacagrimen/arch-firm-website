import React, { useEffect, useState } from "react";
import "../styles/Slider.scss";

const Slider = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === 4) {
        setSlide(1);
      } else {
        setSlide(slide + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="slider">
      <div className="slider__background"></div>
      <div className="slider__info"></div>
      <div className="slider__btngroup">
        <button
          onClick={() => setSlide(1)}
          className={slide === 1 ? "btn btn--active" : "btn"}
        >
          1
        </button>
        <button
          onClick={() => setSlide(2)}
          className={slide === 2 ? "btn btn--active" : "btn"}
        >
          2
        </button>
        <button
          onClick={() => setSlide(3)}
          className={slide === 3 ? "btn btn--active" : "btn"}
        >
          3
        </button>
        <button
          onClick={() => setSlide(4)}
          className={slide === 4 ? "btn btn--active" : "btn"}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Slider;
