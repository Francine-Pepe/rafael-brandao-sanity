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
      {value === index && <Box sx={{ p: "1rem 0 0 0" }}>{children}</Box>}
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

  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchTabs = async () => {
      const query = `*[_type == "tabs" ] { title, slug, label, tabsTitle, body } 
        `;
      const result = await client.fetch(query);
      setTabs(result);
    };

    fetchTabs();
  }, []);

  const components = {
    types: {
      image: ImageComponent,
      youtube: YouTubeComponent,
    },
  };

  useEffect(() => {
    const navigatorLanguage = navigator.language || navigator.userLanguage;
    i18n.changeLanguage(navigatorLanguage.split("-")[0]);
  }, [i18n]);

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
              color: "rgb(115, 2, 54)",
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
                label={item.tabsTitle[i18n.language] || item.tabsTitle?.pt}
                {...a11yProps(item.slug)}
                key={index}
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "300",
                  color: "rgba(32, 0, 15, 1)",
                  "&.Mui-selected": {
                    color: "rgba(32, 0, 15, 1)",
                    fontWeight: "600",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(32, 0, 15, 0.1)",
                    borderRadius: "5px",
                  },
                }}
              />
            ))}
        </Tabs>
      </Box>

      {tabs.map((item, index) => (
        <CustomTabPanel
          value={value}
          index={index}
          key={index}
          
        >
          <div className="tab-content-body-bg">
            <div className="tab-content-body animate__fadeInUp">
              {
                <PortableText
                  value={item.body[i18n.language] || item.body?.pt}
                  components={components}
                />
              }
              
            </div>
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
