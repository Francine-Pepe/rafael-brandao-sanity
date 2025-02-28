import React from "react";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";
import TextBg from "../assets/paper_background.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";

function News() {
  const [news, setShows] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    setOpen(!open && index);
  };

  const closeModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "news"] { title, slug, body, link, image {
            asset -> { _id, url },
            alt
          }
        }`
      )
      .then((data) => setShows(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <PageTitle />
      <section className="news-container container">
        {/* <img src={TextBg} alt="Text background" /> */}
        <div className="news-wrapper">
          {[...news]
            .slice()
            .reverse()
            .map((item, index) => (
              <div key={index} className="news-content">
                <div
                  className="news-image"
                  onClick={() => handleClick(item.slug)}
                >
                  <img src={item.image.asset.url} alt={item.slug} />
                  {open === item.slug && (
                    <Lightbox
                      styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
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
                    style={{ display: item.link ? "block" : "none" }}
                  >
                    {item.title}
                  </a>
                  <PortableText value={item.body} />
                  
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default News;
