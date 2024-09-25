import * as React from "react";
import { IconProps } from "./types";

export const ProH5Line = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zM22 8h-5.835l-1.149 6.321 1.431 1.073 1.302-.65c1.493-.747 3.251.34 3.251 2.01A2.247 2.247 0 0 1 18.753 19H18.5a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4h.253A4.247 4.247 0 0 0 23 16.753c0-2.979-2.959-4.975-5.665-4.004l.5-2.749H22z"
        />
      </svg>
    );
  },
);

export default ProH5Line;
