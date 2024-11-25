import React from "react";
import type { SVGProps } from "react";

export function OpenMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      {...props}
      className="menu-icon icon"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 6h10M4 12h16M7 12h13M7 18h10"
      ></path>
    </svg>
  );
}
