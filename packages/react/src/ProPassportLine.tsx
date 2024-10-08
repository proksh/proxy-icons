import * as React from "react";
import { IconProps } from "./types";

export const ProPassportLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 18v-2h8v2zm4-12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
        <path fill={color} d="m3 3 1-1h16l1 1v18l-1 1H4l-1-1zm2 1v16h14V4z" />
      </svg>
    );
  },
);

export default ProPassportLine;
