import * as React from "react";
import { IconProps } from "./types";

export const ProHardDrive3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M18 17h-2v2h2zm-6 0h2v2h-2z" />
        <path
          fill={color}
          d="M19.383 2H4.617L3 14.938V22h18v-7.062zm-.516 12H5.133l1.25-10h11.234zM5 20v-4h14v4z"
        />
      </svg>
    );
  },
);

export default ProHardDrive3Line;
