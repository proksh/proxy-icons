import * as React from "react";
import { IconProps } from "./types";

export const ProDownloadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.293 8.293 13 13.586V2h-2v11.586L5.707 8.293 4.293 9.707 12 17.414l7.707-7.707zM3 20.75h18v-2H3z"
        />
      </svg>
    );
  },
);

export default ProDownloadLine;
