import * as React from "react";
import { IconProps } from "./types";

export const ProTextWrapLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 6h18V4H3zm0 14h6v-2H3z" />
        <path
          fill={color}
          d="M17.5 13H3v-2h14.5a4.5 4.5 0 1 1 0 9h-3.086l1.293 1.293-1.414 1.414L10.586 19l3.707-3.707 1.414 1.414L14.414 18H17.5a2.5 2.5 0 0 0 0-5"
        />
      </svg>
    );
  },
);

export default ProTextWrapLine;
