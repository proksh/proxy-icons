import * as React from "react";
import { IconProps } from "./types";

export const ProFontSize2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 6.5h5.5V21h3V6.5H16v-3H2z" />
        <path fill={color} d="M15.5 14.5H13v-3h8v3h-2.5V21h-3z" />
      </svg>
    );
  },
);

export default ProFontSize2Fill;
