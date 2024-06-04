import * as React from "react";
import { IconProps } from "./types";

export const ProUnsplashLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z"
        />
      </svg>
    );
  },
);

export default ProUnsplashLine;
