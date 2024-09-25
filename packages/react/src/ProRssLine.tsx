import * as React from "react";
import { IconProps } from "./types";

export const ProRssLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z"
        />
        <path
          fill={color}
          d="M7 21H3v-4a4 4 0 0 1 4 4m5 0a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11zm7 0c0-8.837-7.163-16-16-16V3c9.941 0 18 8.059 18 18z"
        />
      </svg>
    );
  },
);

export default ProRssLine;
