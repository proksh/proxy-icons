import * as React from "react";
import { IconProps } from "./types";

export const ProFirstAidKitLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13v-3h2v3h3v2h-3v3h-2v-3H8v-2z" />
        <path
          fill={color}
          d="M8 2 7 3v3H3L2 7v14l1 1h18l1-1V7l-1-1h-4V3l-1-1zm7 4V4H9v2zM4 8h16v12H4z"
        />
      </svg>
    );
  },
);

export default ProFirstAidKitLine;
