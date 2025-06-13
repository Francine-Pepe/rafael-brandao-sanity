import { useTranslation } from "react-i18next";
import BioImage from "./BioImage";
import BioTextImage from "../assets/headshot - pb-2.webp";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import client from "../client";

function Text() {
  const { t, i18n } = useTranslation();
  type BioTextItem = {
    title?: string;
    slug?: any;
    body?: { [key: string]: any };
  };

  const [bioText, setBioText] = useState<BioTextItem[]>([]);

  useEffect(() => {
    const fetchBioText = async () => {
      const query = `*[_type == "impressum"] { title, slug, body
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
            <div key={index}>
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
