import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const languages = [
  { code: "pt", language: "PT" },
  { code: "en", language: "EN" },
  { code: "de", language: "DE" },
];

const LanguageSelector = () => {
  const homeUrl = useLocation().pathname;

  const { i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
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
          >
            <h3>{lng.language}</h3>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
