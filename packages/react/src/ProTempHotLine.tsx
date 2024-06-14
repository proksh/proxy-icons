import * as React from "react";
import { IconProps } from "./types";

export const ProTempHotLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 12.126V5h-2v7.126A4.002 4.002 0 0 0 12 20a4 4 0 0 0 1-7.874M12 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
        <path
          fill={color}
          d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm4-2a2 2 0 0 0-2 2v6.38l-.5.288a5 5 0 1 0 4.999 0L14 11.38V5a2 2 0 0 0-2-2"
        />
      </svg>
    );
  },
);

export default ProTempHotLine;
