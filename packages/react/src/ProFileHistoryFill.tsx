import * as React from "react";
import { IconProps } from "./types";

export const ProFileHistoryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm9 7h-2v6h5v-2h-3z" />
      </svg>
    );
  },
);

export default ProFileHistoryFill;