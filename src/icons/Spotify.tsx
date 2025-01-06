import React from "react";
import type { SVGProps } from "react";
import { Link, useLocation } from "react-router-dom";

export function Spotify(props: SVGProps<SVGSVGElement>) {
  const homeUrl = useLocation().pathname;

  return (
    <>
      <Link
        to="https://open.spotify.com/artist/3b7ohV6kChpxpIh3cOKxWy?si=WjjFzr_2S-uI1O-ZaGFHTg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 48 48"
          {...props}
          style={{
            filter: `${homeUrl === "/" ? "brightness(0) saturate(100%) invert(100%) sepia(55%) saturate(1529%) hue-rotate(181deg) brightness(112%) contrast(90%)" : "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)"}`,
          }}
          className="icon"
          strokeWidth="0.12rem"


        >
          <title>Spotify</title>

          <circle
            cx={24}
            cy={24}
            r={21.5}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.333 30.67c8.19-1.872 15.215-1.066 20.882 2.397m-21.648-8.786c7.808-2.37 17.515-1.222 24.152 2.856M10.35 17.32c7.595-2.305 20.22-1.86 28.198 2.876"
          ></path>
        </svg>
      </Link>
    </>
  );
}
