import * as React from "react";
import { IconProps } from "./types";

export const ProFilePdfFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 14v-4h2a2 2 0 1 1 0 4z" />
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm9 6H8v8h4a4 4 0 0 0 0-8"
        />
      </svg>
    );
  },
);

export default ProFilePdfFill;
