import * as React from "react";
import { IconProps } from "./types";

export const ProDownloadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8h6V2h2v6h6l.707 1.707-7 7h-1.414l-7-7zM3 21h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProDownloadFill;
