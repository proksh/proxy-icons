import * as React from "react";
import { IconProps } from "./types";

export const ProHardDrive2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 17h-2v2h2z" />
        <path fill={color} d="M3 2v20h18V2zm2 14h14v4H5z" />
      </svg>
    );
  },
);

export default ProHardDrive2Fill;
