import * as React from "react";
import { IconProps } from "./types";

export const ProFileReduceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm5 12h8v-2H8z" />
      </svg>
    );
  },
);

export default ProFileReduceFill;
