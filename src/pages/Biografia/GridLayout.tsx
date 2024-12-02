import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
}));

export default function Gridlayout(props: any) {
  const { data } = props;
  return (
    <Box className="grid-container container">
      <Masonry columns={{ xs: 1, sm: 2, md: 3}} spacing={2} className="grid-content">
        {data.map((item: any, index: any) => (
          <NavLink to={""}>
            <div key={index} className="grid">
              <Label className="grid-label">{item.datas}</Label>
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.alt}
                loading="lazy"
                style={{
                  borderRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          </NavLink>
        ))}
      </Masonry>
    </Box>
  );
}
