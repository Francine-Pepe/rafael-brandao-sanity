import React from "react";
import type { SVGProps } from "react";
import { Link, useLocation } from "react-router-dom";

export function Instagram(props: SVGProps<SVGSVGElement>) {
  const homeUrl = useLocation().pathname;

  return (
    <Link
      to="https://www.instagram.com/rafabrandao_official/"
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
      >
        <rect
          width={37}
          height={37}
          x={5.5}
          y={5.5}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx={4}
          ry={4}
        ></rect>
        <circle
          cx={35.35}
          cy={12.65}
          r={2.25}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx={24}
          cy={24}
          r={8.25}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
      </svg>
    </Link>
  );
}
