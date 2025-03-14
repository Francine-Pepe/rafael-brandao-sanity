import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Copyright() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const { t } = useTranslation();

  return (
    <footer className="copyright-container container">
      <section>
        <small>
          &copy; Copyright {getCurrentYear()} - {t("rightsReserved")} -
          <span> Rafa Brandão</span>
        </small>
        <small>
          <Link
            to="https://www.francinemelopepe.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small>{t("developedBy")}</small>
          </Link>
        </small>
      </section>
    </footer>
  );
}

export default Copyright;
