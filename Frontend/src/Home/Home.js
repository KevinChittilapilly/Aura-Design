import React, { useEffect, useRef, useState } from "react";
import Img1 from "../Assets/img1.jpg";
import Img2 from "../Assets/img2.jpg";
import Img3 from "../Assets/img3.jpg";
import "./Home.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Home = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const showImages = [Img1, Img2,Img3];
  const delay = 3500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const displaySlideShow = () => {
    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {showImages.map((imgSrc, ind) => (
            <div className="slide" key={ind}>
              {ind!==0 && <ChevronLeftIcon
                onClick={() => {
                  setIndex(index - 1);
                }}
                className="chevron-left"
              />}
              <img src={imgSrc} style={{ height: "800px", width: "100%" }} />
              {ind!==showImages.length-1 && <ChevronRightIcon
                className="chevron-right"
                onClick={() => {
                  setIndex(index + 1);
                }}
              />}
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {showImages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === showImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return <div className="home">{displaySlideShow()}</div>;
};
export default Home;
