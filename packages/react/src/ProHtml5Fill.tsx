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
      </svg>
    );
  },
);

export default ProHtml5Fill;
