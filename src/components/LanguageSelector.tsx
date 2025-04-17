import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Portuguese from "../assets/FlagPT.png";
import English from "../assets/FlagEN.png";
import German from "../assets/FlagDE.png";

const languages = [
  { code: "pt", language: Portuguese },
  { code: "en", language: English },
  { code: "de", language: German },
];

const LanguageSelector = () => {
  const homeUrl = useLocation().pathname;

  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('userLanguage', lng);
  };


  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected-language" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            style={{
              color: `${homeUrl === "/" ? "rgb(242, 242, 242" : "rgba(32, 0, 15, 1)"}`,
            }}
            type="button"
            
          >
            <img
              src={lng.language}
              alt={lng.language}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
