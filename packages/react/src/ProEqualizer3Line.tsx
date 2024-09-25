import * as React from "react";
import { IconProps } from "./types";

export const ProEqualizer3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 8v3h2V3H7v3H3v2zm14 0H11V6h10zm-6 5h2v3h4v2h-4v3h-2zM3 16h10v2H3z"
        />
      </svg>
    );
  },
);

export default ProEqualizer3Line;
