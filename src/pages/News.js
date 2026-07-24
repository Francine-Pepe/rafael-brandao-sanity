import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";
import YouTubeComponent from "../components/YouTubeComponent";
import PageDescription from "../components/PageDescription";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function News() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [animationDuration] = useState(500);
  const [maxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier] = useState(2);
  const [doubleTapDelay] = useState(300);
  const [doubleClickDelay] = useState(300);
  const [doubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom] = useState(false);

  const handleClick = (slug) => {
    setOpen(slug);
  };

  const closeModal = () => {
    setOpen(false);
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
      <PageTitle data={t("nav", { returnObjects: true })} />
      <PageDescription data={t("pageDescriptionNews")} />
      <section className="news-container container">
        <div className="news-wrapper">
          {[...news]
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item) => {
              const newsTitle = item.newsTitle || {};
              const text = item.body || {};

              return (
                <div key={item.slug.current} className="news-content">
                  <div
                    className="news-image"
                    onClick={() => handleClick(item.slug.current)}
                  >
                    <img src={item.image.asset.url} alt={item.slug} />
                    {open === item.slug.current && (
                      <Lightbox
                        animation={{ zoom: animationDuration }}
                        plugins={[Zoom]}
                        zoom={{
                          maxZoomPixelRatio,
                          zoomInMultiplier,
                          doubleTapDelay,
                          doubleClickDelay,
                          doubleClickMaxStops,
                          keyboardMoveDistance,
                          wheelZoomDistanceFactor,
                          pinchZoomDistanceFactor,
                          scrollToZoom,
                        }}
                        styles={{
                          container: { backgroundColor: "rgba(0, 0, 0, .9)" },
                        }}
                        open={Boolean(open)}
                        close={closeModal}
                        slides={[{ src: item.image.asset.url }]}
                        className="lightbox lightbox-news"
                      />
                    )}
                  </div>

                  <div className="news-text">
                    <a
                      href={item.link}
                      /* style={{ display: item.link ? "block" : "none" }} */
                    >
                      <h3>{newsTitle[i18n.language] || newsTitle?.pt || ""}</h3>
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
