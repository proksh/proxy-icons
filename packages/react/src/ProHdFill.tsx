import * as React from "react";
import { IconProps } from "./types";

export const ProHdFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.25 10.5v3h1.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25z"
        />
        <path
          fill={color}
          d="M2 3v18h20V3zm4.75 12V9h1.5v2.25h1.5V9h1.5v6h-1.5v-2.25h-1.5V15zm6-6h2.75c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 15.5 15h-2.75z"
        />
      </svg>
    );
  },
);

export default ProHdFill;
