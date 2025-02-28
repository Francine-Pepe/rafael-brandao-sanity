import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation().pathname;
  const { t } = useTranslation();

  return (
    <section className="page-title-container">
      {(t("nav", { returnObjects: true }) as []).map(
        (item: { name: string; link: string }, index: any) => (
          <div key={index} className="title">
            {location === `${item.link}` && (
              <>
                <h3>{item.name}</h3>
                <div className="page-title-bottom-box"></div>
              </>
            )}
          </div>
        )
      )}

    </section>
  );
}

export default PageTitle;
