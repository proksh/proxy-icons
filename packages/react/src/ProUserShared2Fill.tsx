import * as React from "react";
import { IconProps } from "./types";

export const ProUserShared2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m6.586 15H15v2h3.586l-1.793 1.793 1.414 1.414L22.414 18l-4.207-4.207-1.414 1.414zM8 14a5 5 0 0 0-5 5v3h10v-8z"
        />
      </svg>
    );
  },
);

export default ProUserShared2Fill;
