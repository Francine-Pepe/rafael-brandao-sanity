import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function Youtube(props: SVGProps<SVGSVGElement>) {

  return (
    <>
      <Link
        to="https://www.youtube.com/@rafabrando"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 48 48"
          {...props}
          className="icon"
          strokeWidth="0.12rem"

        >
          <title>Youtube</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M43.112 14.394a5 5 0 0 0-3.533-3.533c-2.314-.894-24.732-1.332-31.236.025A5 5 0 0 0 4.81 14.42c-1.045 4.583-1.124 14.491.026 19.177a5 5 0 0 0 3.533 3.533c4.583 1.055 26.371 1.203 31.236 0a5 5 0 0 0 3.533-3.533c1.114-4.993 1.193-14.287-.026-19.203"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M30.567 23.995L20.12 18.004v11.982Z"
          ></path>
        </svg>
      </Link>
    </>
  );
}
