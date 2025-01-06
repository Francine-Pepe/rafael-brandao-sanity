import React from "react";
import type { SVGProps } from "react";
import { useLocation } from "react-router-dom";

export function CloseMenu(props: SVGProps<SVGSVGElement>) {
  const homeUrl = useLocation().pathname;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
      className="menu-icon icon"
      style={{
        filter: `${homeUrl === "/" ? "brightness(0) saturate(100%) invert(100%) sepia(55%) saturate(1529%) hue-rotate(181deg) brightness(112%) contrast(90%)" : "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)"}`,
      }}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 6L6 18M6 6l12 12"
      ></path>
    </svg>
  );
}
