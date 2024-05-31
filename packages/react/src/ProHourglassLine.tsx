import * as React from "react";
import { IconProps } from "./types";

export const ProHourglassLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2h16v2h-2v3.414L13.414 12 18 16.586V20h2v2H4v-2h2v-3.414L10.586 12 6 7.414V4H4zm4 18h8v-2.586l-4-4-4 4zM8 4v2.586l4 4 4-4V4z"
        />
      </svg>
    );
  },
);

export default ProHourglassLine;
