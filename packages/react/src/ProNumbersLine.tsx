import * as React from "react";
import { IconProps } from "./types";

export const ProNumbersLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.5 2h-5v16h5zm-2 14h-1V4h1zM9.5 6h5v12h-5zm2 10h1V8h-1zm-4-6h-5v8h5zm-3 6v-4h1v4zm17 4h-19v2h19z"
        />
      </svg>
    );
  },
);

export default ProNumbersLine;
