import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(props: any) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return <div>{props.children}</div>;
}

export default ScrollToTop;
