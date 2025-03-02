import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { CloseMenu } from "../../icons/CloseMenu";
import PageTitle from "../../components/PageTitle";
import { Navigation } from "../../data";
import client from "../../client";

const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

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
      <Box
        className="grid-container container"
        /* sx={{
          "@media(max-width: 1200px)": {
            width: "90vw",
            padding: "8rem 0",
          },
        }} */
      >
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={2}
          className="grid-content"
        >
          {biografia
            .sort((a, b) => (a.datas > b.datas ? 1 : -1))
            .map((item, index) => {
              return (
                <div key={index}>
                  <div key={item.id} className="grid">
                    <Label className="grid-label">
                      {item.datas} | {item.country}
                    </Label>

                    <img
                      srcSet={`${item.image.asset.url}?w=500&auto=format&dpr=2 2x`}
                      src={`${item.image.asset.url}?w=500&auto=format`}
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
        </Masonry>
      </Box>
    </>
  );
}
