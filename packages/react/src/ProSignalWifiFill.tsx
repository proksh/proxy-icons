import * as React from "react";
import { IconProps } from "./types";

export const ProSignalWifiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3A17.9 17.9 0 0 0 1.595 6.31L1.39 7.748 12 21.108l10.61-13.36-.205-1.438A17.9 17.9 0 0 0 12 3"
        />
      </svg>
    );
  },
);

export default ProSignalWifiFill;
