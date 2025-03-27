import React from "react";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import TextBg from "../assets/paper_background.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import YouTubeComponent from "../components/YouTubeComponent";

function News() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = (index) => {
    setOpen(!open && index);
  };

  const closeModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchNews = async () => {
      const query = `*[_type == "news"] { title, slug, newsTitle, date, body, link, image {
            asset -> { _id, url },
            alt
          }
        }`;
      const result = await client.fetch(query);
      setNews(result);
    };

    fetchNews();
  }, []);

  const components = {
    types: {
      youtube: YouTubeComponent,
    },
  };

  return (
    <>
      <PageTitle />
      <section className="news-container container">
        {/* <img src={TextBg} alt="Text background" /> */}
        <div className="news-wrapper">
          {[...news]
            .slice()
            .reverse()
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((item) => {
              const newsTitle = item.newsTitle || {};
              const text = item.body || {};

              return (
                <div key={item.slug.current} className="news-content">
                  <div
                    className="news-image"
                    onClick={() => handleClick(item.slug)}
                  >
                    <img src={item.image.asset.url} alt={item.slug} />
                    {open === item.slug && (
                      <Lightbox
                        styles={{
                          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
                        }}
                        open={open}
                        close={() => closeModal(false)}
                        slides={[{ src: item.image.asset.url }]}
                        className="lightbox lightbox-news"
                      />
                    )}
                  </div>

                  <div className="news-text">
                    <a
                      href={item.link}
                      /*                       style={{ display: item.link ? "block" : "none" }}
                       */
                    >
                      <h3>
                        {newsTitle[i18n.language] ||
                          newsTitle?.pt ||
                          "No title available"}
                      </h3>
                    </a>

                    <PortableText
                      value={
                        text[i18n.language] || text?.pt || "No text available"
                      }
                      components={components}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default News;
