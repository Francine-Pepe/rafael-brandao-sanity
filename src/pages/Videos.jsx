import { useEffect, useState } from "react";
import VideoTabs from "./VideoTabs/VideoTabs";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import VideoTabsVertical from "./VideoTabs/VideoTabsVertical";

function Videos() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PageTitle data={t("nav", { returnObjects: true })} />
        {isMobile ? (
          <VideoTabs currentLanguage={i18n.language} />
        ) : (
          <VideoTabsVertical currentLanguage={i18n.language} />
        )}
      </Suspense>
    </div>
  );
}

export default Videos;
