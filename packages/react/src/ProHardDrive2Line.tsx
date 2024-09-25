import * as React from "react";
import { IconProps } from "./types";

export const ProHardDrive2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 17h2v2h-2z" />
        <path fill={color} d="M21 2v20H3V2zM5 16v4h14v-4zm14-2V4H5v10z" />
      </svg>
    );
  },
);

export default ProHardDrive2Line;
