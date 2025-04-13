import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <Link
        to="mailto:contato@rafa-brandao.com?bcc=rafabrando@yahoo.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 48 48"
            {...props}
            className="icon"
            strokeWidth="0.12rem"

          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.5 13c13.687 13.574 14.825 13.09 29 0"
            ></path>
            <rect
              width={37}
              height={31}
              x={5.5}
              y={8.5}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              rx={4}
              ry={4}
            ></rect>
          </svg>
        }
      </Link>
    </>
  );
}
