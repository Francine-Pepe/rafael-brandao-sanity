import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import ImageComponent from "./ImageComponent";
import YouTubeComponent from "./YouTubeComponent";
import { useTranslation } from "react-i18next";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function VideoTabs() {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "tabs" ] { title, slug, label, body } 
        `
      )
      .then((data) => setTabs(data))
      .catch(console.error);
  }, []);

  const components = {
    types: {
      image: ImageComponent,
      youtube: YouTubeComponent,
    },
  };

  return (
    <Box sx={{ width: "100%" }} className="tabs-box-container">
      <Box
        sx={{
          borderBottom: "none",
          borderColor: "rgb(115, 2, 54)",
          paddingTop: "2rem",
          "@media(max-width: 945px)": {
            borderBottom: "none",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            ".MuiTabs-flexContainer": {
              flexWrap: "wrap",
              flexGrow: 1,
              borderBottom: "none",
            },
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".Mui-selected": {
              borderRadius: "5px ",
              border: "none",
              backgroundColor: "rgba(32, 0, 15, 0.1)",
              color: "#ffffff",
            },
            "@media(max-width: 945px)": {
              ".Mui-selected": {
                borderBottom: "none",
              },
            },
          }}
        >
          {tabs
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((item, index) => (
              <Tab
                label={item.label}
                {...a11yProps(item.slug)}
                key={index}
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "300",
                  color: "rgba(32, 0, 15, 1)",
                  "&.Mui-selected, &:hover": {
                    backgroundColor: "rgba(32, 0, 15, 0.1)",
                    color: "rgba(32, 0, 15, 1)",
                  },
                }}
              />
            ))}
        </Tabs>
      </Box>

      {tabs.map((item, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          <div className="tab-content-body animate__fadeInUp">
            <PortableText value={item.body} components={components} />
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
