import * as React from "react";
import { IconProps } from "./types";

export const ProTextBlockLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 3H1v3h2V5h2v5H3.5v2h5v-2H7V5h2v1h2z" />
        <path fill={color} d="M13 5h7v14H4v-5H2v7h20V3h-9z" />
      </svg>
    );
  },
);

export default ProTextBlockLine;
