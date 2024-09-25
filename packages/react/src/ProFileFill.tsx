import * as React from "react";
import { IconProps } from "./types";

export const ProFileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 2v20H3V7.086L8.086 2zM9 8V4h-.086L5 7.914V8z"
        />
      </svg>
    );
  },
);

export default ProFileFill;
