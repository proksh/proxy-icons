import * as React from "react";
import { IconProps } from "./types";

export const ProVidicon2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 12H5v-2h2z" />
        <path
          fill={color}
          d="M14 2H5v2h8v2H1v14h16v-4.132l6 4V6.132l-6 4V6h-2V3zm3 10.535 4-2.666v6.262l-4-2.666zM15 8v10H3V8z"
        />
      </svg>
    );
  },
);

export default ProVidicon2Line;
