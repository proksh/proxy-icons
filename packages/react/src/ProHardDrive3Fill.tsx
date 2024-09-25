import * as React from "react";
import { IconProps } from "./types";

export const ProHardDrive3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 17h2v2h-2zm-2 0h-2v2h2z" />
        <path
          fill={color}
          d="M19.383 2H4.617L3 14.938V22h18v-7.062zM5 16h14v4H5z"
        />
      </svg>
    );
  },
);

export default ProHardDrive3Fill;
