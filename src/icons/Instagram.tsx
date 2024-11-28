import React from "react";
import type { SVGProps } from "react";

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 48 48"
      {...props}
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
  );
}
