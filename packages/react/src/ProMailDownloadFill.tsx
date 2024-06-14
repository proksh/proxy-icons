import * as React from "react";
import { IconProps } from "./types";

export const ProMailDownloadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v1.01l-10 7.726L2 4.01z" />
        <path
          fill={color}
          d="M2 6.536V21h13.965l-2.733-2.732L16.5 15v-3h5v3l.5.5V6.537l-10 7.727z"
        />
        <path
          fill={color}
          d="M18 18.086V14h2v4.086l.793-.793 1.414 1.414L19 21.914l-3.207-3.207 1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProMailDownloadFill;
