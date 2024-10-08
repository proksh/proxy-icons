import * as React from "react";
import { IconProps } from "./types";

export const ProHardDriveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11.95 2H4L3 3v7.95A10 10 0 0 0 11.95 2" />
        <path
          fill={color}
          d="M3 12.959C8.83 12.478 13.478 7.829 13.959 2H20l1 1v18l-1 1H4l-1-1zM15 16v2h2v-2z"
        />
      </svg>
    );
  },
);

export default ProHardDriveFill;
