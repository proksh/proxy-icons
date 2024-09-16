import * as React from "react";
import { IconProps } from "./types";

export const ProContractLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086v4.588a7 7 0 0 0-2-.603V8h-4V4H5v16h6.29a7 7 0 0 0 .965 2H3z"
        />
        <path
          fill={color}
          d="M16.85 13.397a1.488 1.488 0 0 1 2.299 0c.315.382.8.583 1.293.535a1.488 1.488 0 0 1 1.625 1.625c-.047.494.153.979.536 1.294a1.49 1.49 0 0 1 0 2.298c-.383.315-.584.8-.536 1.293a1.488 1.488 0 0 1-1.625 1.626 1.49 1.49 0 0 0-1.293.535 1.49 1.49 0 0 1-2.299 0 1.49 1.49 0 0 0-1.293-.535 1.488 1.488 0 0 1-1.625-1.626 1.49 1.49 0 0 0-.536-1.293 1.488 1.488 0 0 1 0-2.298c.383-.315.584-.8.536-1.293a1.488 1.488 0 0 1 1.625-1.626c.493.048.978-.153 1.293-.536m4.18 3.633-1.06-1.06-2.47 2.47-1.47-1.47-1.06 1.06 2.53 2.53z"
        />
      </svg>
    );
  },
);

export default ProContractLine;