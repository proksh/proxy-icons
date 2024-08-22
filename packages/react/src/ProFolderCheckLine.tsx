import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M10.414 3H2v18h11v-2H4V5h5.586l2 2H20v6h2V5h-9.586z" />
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

export default ProFolderCheckLine;
