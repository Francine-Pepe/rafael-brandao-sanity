import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import BioImage from "./BioImage";
import BioTextImage from "../assets/headshot - pb-2.webp";

function Text() {
  const { t, i18n } = useTranslation();
  const [bioText, setBioText] = useState([]);

  useEffect(() => {
    const fetchBioText = async () => {
      const query = `*[_type == "biografiaText"] { title, slug, body
          }`;
      const result = await client.fetch(query);
      setBioText(result);
    };

    fetchBioText();
  }, []);

  return (
    <section className="text-container">
      <div className="text-content">
        <div className="text-image-container container">
          <BioImage image={BioTextImage} />
        </div>
        {bioText.map((item, index) => {
          const text = item.body || {};
          return (
            <div key={index} className="nav-footer">
              <PortableText value={text[i18n.language] || text.pt} />
            </div>
          );
        })}
        <p>{t("text")}</p>
      </div>
    </section>
  );
}

export default Text;
