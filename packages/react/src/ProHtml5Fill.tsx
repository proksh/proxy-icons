import * as React from "react";
import { IconProps } from "./types";

export const ProHtml5Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="m3 2 1.5 18 7.5 2 7.5-2L21 2zm4.087 10.25L6.5 5.5h11L17.283 8H9.227l.152 1.75h7.751L16.5 17 12 18l-4.5-1-.304-3.5h2.51l.126 1.457L12 15.44l2.168-.482.236-2.707z"
        />
        <path
          stroke={color}
          d="m6.09 12.337.015.163.065.75.03.337.304 3.5.063.73.716.16 4.5 1 .217.047.217-.048 4.5-1 .716-.159.063-.73.63-7.25L18.2 9l.022-.25.058-.663.217-2.5.095-1.087H5.41l.094 1.087zm4.611 1.076-.014-.163h2.626l-.078.89-1.235.275-1.235-.275zm-5.263 5.802L4.087 3h15.826l-1.351 16.215L12 20.965z"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProHtml5Fill;
