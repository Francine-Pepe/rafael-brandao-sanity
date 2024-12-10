import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function Spotify(props: SVGProps<SVGSVGElement>) {

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
