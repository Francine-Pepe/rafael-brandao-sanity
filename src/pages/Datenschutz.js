import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";

function Datenschutz() {
  const [datenschutz, setDatenschutz] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchDatenschutz = async () => {
      const query = `*[_type == "datenschutz"] { title, slug,  body, {
              asset -> { _id, url },
              alt
            }
          }`;
      const result = await client.fetch(query);
      setDatenschutz(result);
    };

    fetchDatenschutz();
  }, []);

  return (
    <section className="datenschutz-container container">
      <div className="text-content">
        {datenschutz.map((item) => {
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

export default Datenschutz;
