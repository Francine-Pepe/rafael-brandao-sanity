import { useTranslation } from "react-i18next";

function PageDescription(props: any) {
  const { t } = useTranslation();
  const { data } = props;

  return (
    <section className="text-container">
      <div className="text-content">
        <p>{data}</p>
      </div>
    </section>
  );
}

export default PageDescription;
