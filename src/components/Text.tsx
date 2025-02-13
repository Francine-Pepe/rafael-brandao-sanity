import { useTranslation } from "react-i18next";

function Text() {

  const {t} = useTranslation()

  return (
    <section className="text-container">
      <div className="text-content">
          <p>{t("text")}</p>
      </div>
    </section>
  );
}

export default Text;
