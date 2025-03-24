import React from "react";
import ReturnButton from "../icons/ReturnButton";
import ForwardButton from "../icons/ForwardButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <section
      className="navigation-buttons"
      style={{
        display: location === "/" ? "none" : "flex",
        filter:
          location === "/galeria"
            ? "brightness(0) saturate(100%) invert(100%) sepia(55%) saturate(1529%) hue-rotate(181deg) brightness(112%) contrast(90%)"
            : "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)",
            
      }}
    >
      <div onClick={goBack}>
        <ReturnButton />
      </div>
      <div onClick={goForward}>
        <ForwardButton />
      </div>
    </section>
  );
};

export default NavigationButtons;
