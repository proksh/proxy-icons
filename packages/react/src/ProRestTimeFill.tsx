import * as React from "react";
import { IconProps } from "./types";

export const ProRestTimeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 5h5l-4.8 6.4.8 1.6h6.5v-2H16l4.8-6.4L20 3h-7z"
        />
        <path
          fill={color}
          d="M11 7V6a8 8 0 1 0 7.938 9h-6.174l-1.906-3.811L14 7z"
        />
      </svg>
    );
  },
);

export default ProRestTimeFill;
