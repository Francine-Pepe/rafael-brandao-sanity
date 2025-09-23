import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import ImageComponent from "../../components/ImageComponent";
import YouTubeComponent from "../../components/YouTubeComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "0 2rem", borderTop: "1px solid rgba(0, 0, 0, 0.12)" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VideoTabsVertical() {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = useState([]);

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
        flexGrow: 1,
        bgcolor: "rgb(242, 242, 242)",
        display: "flex",
        width: "fit-content",
        height: "100%",
        padding: "3.5rem 0 0 3.5rem",
        borderColor: "rgb(115, 2, 54)",
        boxSizing: "border-box"
      }}
      className="tabs-box-container"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          minWidth: "15dvw",
          borderRight: 1,
          borderColor: "divider",
          textAlignLast: "left",

          ".Mui-selected": {
            borderRadius: "5px 0 0 5px ",
            border: "none",
            color: "rgb(115, 2, 54)",
            fontWeight: "400",
          },
          ".MuiTabs-indicator": {
            backgroundColor: "rgb(115, 2, 54)",
            borderRadius: "5px 0 0 5px ",
          },
          ".MuiButtonBase": {
            textSizeAdjust: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            
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
                width: "auto",
                textAlign: "left",
                alignItems: 'start',
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
                  borderRadius: "5px 0 0 5px ",
                  color: "rgb(115, 2, 54)",
                  fontWeight: "400",
                },
              }}
            />
          ))}
      </Tabs>
      {tabs.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <div className="tab-vertical-content-body-bg">
            <div className="tab-vertical-content-body">
              {
                <PortableText
                  value={item.body[i18n.language] || item.body?.pt}
                  components={components}
                />
              }
            </div>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
