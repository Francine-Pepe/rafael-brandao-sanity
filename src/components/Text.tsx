import { useTranslation } from "react-i18next";
import BioImage from "./BioImage";
import BioTextImage from "../assets/headshot - pb-2.webp";

function Text() {
  const { t } = useTranslation();

  return (
    <section className="text-container">
      <div className="text-content">
        <div className="text-image-container container">
          <BioImage image={BioTextImage} />
        </div>
        <p>{t("text")}</p>
      </div>
    </section>
  );
}

export default Text;
