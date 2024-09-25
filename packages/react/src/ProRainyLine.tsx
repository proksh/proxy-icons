import * as React from "react";
import { IconProps } from "./types";

export const ProRainyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 4a5 5 0 0 1 4.733 3.384l.27.79.825-.124Q17.156 8 17.5 8a4.5 4.5 0 0 1 4.495 4.71l-.002.047.002.047Q22 12.901 22 13a4 4 0 0 1-4 4h-2.393q.115.17.22.346c.239.4.53.98.634 1.654H18a6 6 0 0 0 5.995-6.245Q24 12.627 24 12.5a6.5 6.5 0 0 0-6.673-6.498A7.001 7.001 0 0 0 4.046 8.194 5.502 5.502 0 0 0 5.5 19h2.039c.104-.675.395-1.253.634-1.654q.105-.177.22-.346H5.5a3.5 3.5 0 0 1-.39-6.979l.892-.098L6 9a5 5 0 0 1 5-5"
        />
        <path
          fill={color}
          d="M14.409 19c-.225-.669-.826-1.418-1.371-2A14 14 0 0 0 12 16s-.491.416-1.038 1c-.545.582-1.146 1.331-1.37 2a1.6 1.6 0 0 0-.092.5 2.5 2.5 0 0 0 5 0q-.002-.238-.091-.5"
        />
      </svg>
    );
  },
);

export default ProRainyLine;
