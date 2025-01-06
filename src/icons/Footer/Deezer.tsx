import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function Deezer(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <Link
        to="https://deezer.page.link/HzGVgDQF16HoSkHL6"
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
          <title>Deezer</title>

          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 29.88h9.75v5.88H4.5zm9.75 0H24v5.88h-9.75zm9.75 0h9.75v5.88H24zm9.75 0h9.75v5.88h-9.75zM14.25 24H24v5.88h-9.75zM24 24h9.75v5.88H24zm9.75 0h9.75v5.88h-9.75zm-19.5-5.88H24V24h-9.75zm19.5 0h9.75V24h-9.75zm0-5.89h9.75v5.88h-9.75z"
          ></path>
        </svg>
      </Link>
    </>
  );
}
