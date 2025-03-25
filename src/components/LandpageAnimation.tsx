import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LandpageAnimation() {
  const { t } = useTranslation();

  return (
    <section className="landpage-animation-box animate__fadeIn">
      <Link to={"/biografia"}>{t("homepageButton")}</Link>
    </section>
  );
}

export default LandpageAnimation;
