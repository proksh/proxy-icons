import * as React from "react";
import { IconProps } from "./types";

export const ProTextBlockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M1 3v3h2V5h2v5H3.5v2h5v-2H7V5h2v1h2V3z" />
        <path fill={color} d="M2 21v-7h8.5V8H13V3h9v18z" />
      </svg>
    );
  },
);

export default ProTextBlockFill;
