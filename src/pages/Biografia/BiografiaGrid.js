import PageTitle from "../../components/PageTitle";
import { Navigation } from "../../data";
import client from "../../client";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import ImageGallery from "../ImageGallery";
import { keyframes } from "@emotion/react";

function BiografiaGrid() {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [biografia, setBiografia] = useState([]);

  const handleClick = (slug) => {
    setVisibleDetails(!visibleDetails && slug);
  };

  const closeModal = () => {
    setVisibleDetails(true);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "biografia"] { slug, title, datas, country, body, image {asset -> { _id, url }}, image1 {asset -> { _id, url }}, image2 {asset -> { _id, url }}, image3 {
              asset -> { _id, url },
              alt
            }
          }`
      )
      .then((data) => setBiografia(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <PageTitle data={Navigation} />
      <section className="grid-container container">
        {biografia
          .sort((a, b) => (a.datas > b.datas ? 1 : -1))
          .map((item, index) => {
            return (
              <div key={index} className="biografia-grid-content">
                <div className="grid-images">
                  <div className="grid-images-text">
                    <h4>{item.title}</h4>
                  </div>
                  <img
                    src={item.image.asset.url}
                    alt={item.alt}
                    loading="lazy"
                    className="grid-image"
                    onClick={() => handleClick(item.slug)}
                  />
                </div>
                <div onClick={closeModal}>
                  {visibleDetails === item.slug && (
                    <Modal
                      datas={item.datas}
                      body={item.body}
                      image={item.image.asset.url}
                      alt={item.alt}
                      image1={item.image1.asset.url}
                      image2={item.image2.asset.url}
                      image3={item.image3.asset.url}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default BiografiaGrid;
