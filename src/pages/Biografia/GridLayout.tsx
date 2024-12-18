import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { CloseMenu } from "../../icons/CloseMenu";

const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function Gridlayout(props: any) {
  const { data } = props;
  console.log(data);

  const [visibleDetails, setVisibleDetails] = useState(false);

  const handleClick = (id: any) => {
    setVisibleDetails(!visibleDetails && id);
  };

  const closeModal = () => {
    setVisibleDetails(true);
  };

  return (
    <Box className="grid-container container">
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        className="grid-content"
      >
        {data.map((item: any, index: any) => (
          <div key={index}>
            <NavLink to={""}>
              <div key={item.id} className="grid">
                <Label className="grid-label">
                  {item.datas} | {item.country}
                </Label>

                <img
                  srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                  src={`${item.image}?w=162&auto=format`}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    borderRadius: 4,
                    display: "block",
                    width: "100%",
                    fill: "red",
                  }}
                  className="grid-image"
                  onClick={() => handleClick(item.id)}
                />
              </div>
            </NavLink>
            <div onClick={closeModal}>
              {visibleDetails === item.id && (
                <Modal
                  datas={item.datas}
                  text={item.text}
                  image={item.image}
                  alt={item.alt}
                  image1={item.image1}
                  image2={item.image2}
                  image3={item.image3}
                />
              )}
            </div>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
