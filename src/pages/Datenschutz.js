import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

function Datenschutz() {
  const [datenschutz, setDatenschutz] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchDatenschutz = async () => {
      const query = `*[_type == "datenschutz"] { title, body
          }`;
      const result = await client.fetch(query);
      setDatenschutz(result);
    };

    fetchDatenschutz();
  }, []);

  return (
    <section className="datenschutz-container container">
      <PageTitle data={t("navFooter", { returnObjects: true })} />

      <div className="text-content">
        {datenschutz.map((item, index) => {
          const text = item.body || {};
          return (
            <div key={index} className="nav-footer">
              <PortableText value={text[i18n.language] || text?.pt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Datenschutz;
