import * as React from "react";
import { IconProps } from "./types";

export const ProDownloadCloud2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 5a5 5 0 0 1 4.733 3.384l.27.79.825-.124Q17.156 9 17.5 9a4.5 4.5 0 0 1 4.495 4.71l-.002.047.002.047Q22 13.901 22 14a4 4 0 0 1-4 4h-.5v2h.5a6 6 0 0 0 5.995-6.245Q24 13.627 24 13.5a6.5 6.5 0 0 0-6.673-6.498A7.001 7.001 0 0 0 4.046 9.194 5.502 5.502 0 0 0 5.5 20h1v-2h-1a3.5 3.5 0 0 1-.39-6.979l.892-.098L6 10a5 5 0 0 1 5-5"
        />
        <path
          fill={color}
          d="M13 18.586V13h-2v5.586l-2.293-2.293-1.414 1.414L12 22.414l4.707-4.707-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProDownloadCloud2Line;
