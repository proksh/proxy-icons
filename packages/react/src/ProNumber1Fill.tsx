import * as React from "react";
import { IconProps } from "./types";

export const ProNumber1Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.105 2.553 5.5-1.5L14.5 2.5V22h-3V4.464l-3.605.983z"
        />
      </svg>
    );
  },
);

export default ProNumber1Fill;
