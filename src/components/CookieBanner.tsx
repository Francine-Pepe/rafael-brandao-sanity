import { CookieConsent } from "react-cookie-consent";

declare global {
  interface Window {
    resetConsent?: () => void;
  }
}

export const CookieBanner = () => {
  const handleDecline = () => {
    document.cookie = "youtube_consent=false; path=/; max-age=31536000";
    localStorage.setItem("youtube_consent", "false");
    console.log("YouTube cookies declined");
  };

  const handleAccept = () => {
    document.cookie = "youtube_consent=true; path=/; max-age=31536000";
    localStorage.setItem("youtube_consent", "true");
    console.log("YouTube cookies accepted");
  };

  // Optional: Helper for development to reset consent
  if (process.env.NODE_ENV === "development") {
    window.resetConsent = () => {
      document.cookie =
        "youtube_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("youtube_consent");
      console.log("Consent reset — reloading...");
      window.location.reload();
    };
  }

  return (
    <CookieConsent
      location="bottom"
      cookieName="youtube_consent"
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "rgb(115, 2, 54)",
        color: "rgb(242, 242, 242)",
        zIndex: 9999,
        alignItems: "center",
        justifyContent: "center"
      }}
      buttonText="Accept"
      buttonStyle={{
        background: "#4CAF50",
        color: "white",
        fontSize: "1rem",
        marginLeft: "1rem",
        
      }}
      declineButtonText="Decline"
      declineButtonStyle={{
        background: "#f44336",
        color: "rgb(242, 242, 242)",
        fontSize: "1rem",
      }}
      expires={365}
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      overlay
      overlayStyle={{ background: "rgba(0, 0, 0, 0.53)" }}
    >
      <div className="cookie-banner" style={{ padding: "10px" }}>
        <h2>Cookie Consent</h2>
        <p>We use YouTube embeds that may use cookies. Please choose:</p>
      </div>
    </CookieConsent>
  );
};
