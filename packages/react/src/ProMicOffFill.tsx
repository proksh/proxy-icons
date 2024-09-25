import * as React from "react";
import { IconProps } from "./types";

export const ProMicOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 10a8.96 8.96 0 0 1-1.447 4.896l-1.455-1.456A6.97 6.97 0 0 0 19 10zm-4.314 7.686L21 22l1.414-1.414-19-19L2 3l5 5v2a5 5 0 0 0 6.703 4.703l1.515 1.515A7 7 0 0 1 5 10H3a9 9 0 0 0 8 8.945V23h2v-4.055a8.9 8.9 0 0 0 3.686-1.26M17 10c0 .691-.14 1.35-.394 1.949l-8.749-8.75A5 5 0 0 1 17 6z"
        />
      </svg>
    );
  },
);

export default ProMicOffFill;
