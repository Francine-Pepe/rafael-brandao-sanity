import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

function Impressum() {
  const [impressum, setImpressum] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchImpressum = async () => {
      const query = `*[_type == "impressum"] { title, slug, body
          }`;
      const result = await client.fetch(query);
      setImpressum(result);
    };

    fetchImpressum();
  }, []);

  return (
    <section className="impressum-container container">
      <PageTitle data={t("navFooter", { returnObjects: true })} />

      <div className="text-content">
        {impressum.map((item, index) => {
          const text = item.body || {};
          return (
            <div key={index} className="nav-footer">
              <PortableText value={text[i18n.language] || text.pt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Impressum;
