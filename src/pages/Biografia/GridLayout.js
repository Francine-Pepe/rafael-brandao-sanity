import * as React from "react";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import PageTitle from "../../components/PageTitle";
import client from "../../client";

export default function Gridlayout() {
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
        `*[_type == "biografia"] { slug, datas, country, body, image {asset -> { _id, url }}, image1 {asset -> { _id, url }}, image2 {asset -> { _id, url }}, image3 {
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
      <PageTitle />
      <Box className="grid-container container">
        <section className="image-grid-section">
          <div className="image-grid-container container">
            <div className="columns">
              {biografia
                .sort((a, b) => (a.datas > b.datas ? 1 : -1))
                .map((item, index) => {
                  return (
                    <div div key={index}>
                      <img
                        srcSet={item.image.asset.url}
                        src={item.image.asset.url}
                        alt={item.alt}
                        loading="lazy"
                        style={{
                          borderRadius: 4,
                          display: "block",
                          width: "100%",
                          fill: "red",
                        }}
                        className="grid-image"
                        onClick={() => handleClick(item.slug)}
                      />
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
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}
