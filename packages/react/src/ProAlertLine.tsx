import * as React from "react";
import { IconProps } from "./types";

export const ProAlertLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13.5v-6h2v6zm0 2v2h2v-2z" />
        <path
          fill={color}
          d="M9.401 2.5H14.6l8.066 15.056-2.63 3.944H3.965l-2.63-3.944zm1.198 2L3.665 17.444l1.37 2.056h13.93l1.37-2.056L13.402 4.5z"
        />
      </svg>
    );
  },
);

export default ProAlertLine;
