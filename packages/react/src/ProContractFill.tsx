import * as React from "react";
import { IconProps } from "./types";

export const ProContractFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086v4.588A7 7 0 0 0 12.255 22H3z"
        />
        <path
          fill={color}
          d="M19.15 13.397c.314.382.8.583 1.293.535a1.488 1.488 0 0 1 1.625 1.625 1.49 1.49 0 0 0 .535 1.294 1.488 1.488 0 0 1 0 2.298 1.49 1.49 0 0 0-.535 1.293 1.488 1.488 0 0 1-1.626 1.626 1.49 1.49 0 0 0-1.293.535 1.488 1.488 0 0 1-2.298 0 1.49 1.49 0 0 0-1.293-.535 1.488 1.488 0 0 1-1.626-1.626 1.49 1.49 0 0 0-.536-1.293 1.488 1.488 0 0 1 0-2.298c.383-.315.584-.8.536-1.293a1.488 1.488 0 0 1 1.625-1.626c.494.048.979-.153 1.294-.536a1.488 1.488 0 0 1 2.298 0M17.5 20.56l3.53-3.53-1.06-1.061-2.47 2.47-1.47-1.47-1.06 1.06z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProContractFill;
