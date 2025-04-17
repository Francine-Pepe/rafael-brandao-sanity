import React, { useEffect, useState } from "react";
import client from "../client";
import VideoTabs from "../components/VideoTabs";
import PageTitle from "../components/PageTitle";
import PageDescription from "../components/PageDescription";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function Videos() {
  const [videos, setVideos] = useState([]);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "videos"] {image, description {
              asset -> {_id, url},
              alt
            } }`
      )
      .then((data) => setVideos(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PageTitle data={t("nav", { returnObjects: true })} />
        <VideoTabs currentLanguage={i18n.language} />
      </Suspense>
    </div>
  );
}

export default Videos;
