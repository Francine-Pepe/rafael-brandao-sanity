import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function Applemusic(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <Link
        to="https://music.apple.com/de/album/solo/1370347329?l=en-GB"
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
          <title>Apple Music</title>

          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.08 18.25v-7.83a2.16 2.16 0 0 1 1.75-2.13L38 4.54a2.16 2.16 0 0 1 2.58 2.13v7"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.08 19.57a2.16 2.16 0 0 1 1.75-2.13L38 13.69a2.16 2.16 0 0 1 2.58 2.12m-.03-2.16v18.56M17.08 18.25v20.43"
          ></path>
          <circle
            cx={12.27}
            cy={38.68}
            r={4.82}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
          <circle
            cx={35.73}
            cy={32.21}
            r={4.82}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
        </svg>
      </Link>
    </>
  );
}
