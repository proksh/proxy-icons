import * as React from "react";
import { IconProps } from "./types";

export const ProVuejsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.317 3 12 18l8.684-15H23L12 22 1 3zm4.342 0L12 10.5 16.343 3h2.316L12 14.5 5.343 3z"
        />
      </svg>
    );
  },
);

export default ProVuejsLine;
