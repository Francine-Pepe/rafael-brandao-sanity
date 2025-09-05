import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import ImageComponent from "../../components/ImageComponent";
import YouTubeComponent from "../../components/YouTubeComponent";
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
      {value === index && <Box sx={{ p: "0" }}>{children}</Box>}
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
  const [key, setKey] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchTabs = async () => {
      const query = `*[_type == "tabs" ] { title, slug, label, tabsTitle, body }`;
      const result = await client.fetch(query);
      setTabs(result);
    };

    fetchTabs();
  }, [i18n.language]);

  const components = {
    types: {
      image: ImageComponent,
      youtube: YouTubeComponent,
    },
  };

  useEffect(() => {
    if (!i18n.language) {
      const navigatorLanguage = navigator.language || navigator.userLanguage;
      i18n.changeLanguage(navigatorLanguage.split("-")[0]);
    }
  }, [i18n]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "rgb(242, 242, 242)",
      }}
      className="tabs-box-container"
      key={key}
    >
      <Box
        sx={{
          borderBottom: "none",
          borderColor: "rgba(0, 0, 0, 0.12)",
          paddingTop: "2rem",
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
              borderRadius: "5px 5px 0 0 ",
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
                selected={true}
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "300",
                  color: "rgba(32, 0, 15, 1)",
                  "&.Mui-selected": {
                    color: "#F2F2F2",
                    fontWeight: "400",
                    backgroundColor: "rgb(115, 2, 54)",
                  },
                  "&:hover": {
                  backgroundColor: "rgb(242, 242, 242)",
                  borderRadius: "5px",
                  color: "rgb(115, 2, 54)",
                  fontWeight: "400",
                },
                }}
              />
            ))}
        </Tabs>
      </Box>

      <Box sx={{ flex: 1 }}>
        {tabs.map((item, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
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
    </Box>
  );
}
