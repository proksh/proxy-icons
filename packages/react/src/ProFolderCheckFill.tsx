import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} clipPath="url(#a)">
          <path d="M10.414 3H2v18h13.965l-2.733-2.732 3.536-3.536L19 16.965l3-3V5h-9.586z" />
          <path d="m19 21.914 5.207-5.207-1.414-1.414L19 19.086l-2.293-2.293-1.414 1.414z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ProFolderCheckFill;
