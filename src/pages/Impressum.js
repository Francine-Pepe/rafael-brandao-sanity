import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";

function Impressum() {
  const [impressum, setImpressum] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchImpressum = async () => {
      const query = `*[_type == "impressum"] { title, slug,  body, {
              asset -> { _id, url },
              alt
            }
          }`;
      const result = await client.fetch(query);
      setImpressum(result);
    };

    fetchImpressum();
  }, []);

  return (
    <section className="datenschutz-container container">
      <div className="text-content">
        {impressum.map((item) => {
          /* const text = item.body || {}; */
          return (
            <div key={item.slug.current} className="text-content">
              <PortableText value={item.body[i18n.language] || item.body?.pt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Impressum;
