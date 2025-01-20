import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { VideoTabsContent } from "../data";
import YoutubeVideos from "./YoutubeVideos";
import { useEffect, useState } from "react";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import ReactPlayer from "react-player";
import YouTubePlayer from "react-player/youtube";
import { PortableText } from "@portabletext/react";
import YouTube from "react-youtube";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

  useEffect(() => {
    client
      .fetch(
        `*[_type == "tabs"] {   title, slug, label, body, url {
                  asset -> {_id, url},
                  alt
                } }`
      )
      .then((data) => setTabs(data))
      .catch(console.error);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "rgb(115, 2, 54)",
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
              borderRadius: "5px 5px 0 0",
              border: "1px solid rgb(115, 2, 54)",
              borderBottom: "none",
            },
            "@media(max-width: 945px)": {
              ".Mui-selected": {
                borderBottom: "1px solid rgb(115, 2, 54)",
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
                    backgroundColor: "rgba(242, 242, 242, 0.2)",
                    color: "rgb(115, 2, 54)",
                  },
                }}
              />
            ))}
        </Tabs>
      </Box>
      {tabs.map((item, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          <div className="tab-content-body">
            <BlockContent blocks={item.body} />
            <YouTube videoId={item.url} />;
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
