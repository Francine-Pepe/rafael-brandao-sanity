import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const useYouTubeConsent = () => {
  const [cookies] = useCookies(["youtube_consent"]);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check both cookie and localStorage for consent
    const consentValue =
      cookies.youtube_consent === "true" ||
      localStorage.getItem("youtube_consent") === "true";
    setHasConsent(consentValue);
  }, [cookies.youtube_consent]);

  return hasConsent;
};
