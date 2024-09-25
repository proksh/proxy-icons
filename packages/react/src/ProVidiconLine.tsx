import * as React from "react";
import { IconProps } from "./types";

export const ProVidiconLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 10h2V8H5z" />
        <path
          fill={color}
          d="M1 4h16v5.131l6-4V18.87l-6-4V20H1zm16 8.465 4 2.667V8.869l-4 2.666zM15 6H3v12h12z"
        />
      </svg>
    );
  },
);

export default ProVidiconLine;
