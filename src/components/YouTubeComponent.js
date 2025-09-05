import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const COOKIE_NAME = "youtube_consent";

const YouTubeComponent = ({ value }) => {
  const { url } = value;
  const [hasConsent, setHasConsent] = useState(false);
  const { t } = useTranslation();

  // Load consent on mount
  useEffect(() => {
    const checkConsent = () => {
      const cookieConsent = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${COOKIE_NAME}=`))
        ?.split("=")[1];
      const localStorageConsent = localStorage.getItem(COOKIE_NAME);
      return cookieConsent === "true" || localStorageConsent === "true";
    };

    setHasConsent(checkConsent());

    // Listen for global consent change
    const onConsentChange = () => {
      setHasConsent(true);
    };

    window.addEventListener("youtubeConsentGiven", onConsentChange);
    return () => {
      window.removeEventListener("youtubeConsentGiven", onConsentChange);
    };
  }, []);

  const isValidYoutubeUrl = (url) => {
    try {
      const parsed = new URL(url);
      return (
        parsed.hostname === "www.youtube.com" || parsed.hostname === "youtu.be"
      );
    } catch (e) {
      return false;
    }
  };

  if (!isValidYoutubeUrl(url)) {
    console.error("Invalid YouTube URL:", url);
    return <p>Invalid YouTube URL</p>;
  }

  const videoId = url.includes("v=")
    ? url.split("v=")[1]?.split("&")[0]
    : url.split("/").pop();

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  if (!hasConsent) {
    return (
      <div className="youtube-consent-container">
        <div className="youtube-consent-content">
          <h4>{t("youtubeBlocked")}</h4>
          <p>{t("cookieDeclined")}</p>
          <button
            className="youtube-consent-placeholder"
            onClick={() => {
              document.cookie = `${COOKIE_NAME}=true; path=/; max-age=31536000`;
              localStorage.setItem(COOKIE_NAME, "true");

              // Broadcast global event
              window.dispatchEvent(new Event("youtubeConsentGiven"));
              setHasConsent(true); // Just in case
            }}
          >
            {t("allowYoutubeVideos")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </section>
  );
};

export default YouTubeComponent;
