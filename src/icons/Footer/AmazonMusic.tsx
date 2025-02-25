import React from "react";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

export function AmazonMusic(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <Link
        to="https://music.amazon.de/albums/B07C6SSC6X?ref=dm_sh_aw0vCZzJg9xg7agarh9MzGnph"
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
          <title>Amazon Music</title>

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
            d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08M20.404 20.125v3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-3.3m0 3.3v2m-14.004-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2m-4-5.2v5.2m4-3.2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.2"
          ></path>
          <circle cx={31.88} cy={17.675} r={0.7} fill="currentColor"></circle>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M31.88 20.125v5.3m-5.34-.452a2.25 2.25 0 0 0 1.646.447h.448a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.897a1.324 1.324 0 0 1-1.322-1.325h0a1.324 1.324 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.644.448m7.77 3.85a2 2 0 0 1-1.737 1.007h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 1.735 1.004"
          ></path>
        </svg>
      </Link>
    </>
  );
}
