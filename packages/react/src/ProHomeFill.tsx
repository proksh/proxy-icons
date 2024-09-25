import * as React from "react";
import { IconProps } from "./types";

export const ProHomeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m21 8.5-9-6.75L3 8.5V21h18z" />
        <path fill={color} d="m21 8.5-9-6.75L3 8.5V21h18z" />
        <path fill={color} d="m21 8.5-9-6.75L3 8.5V21h18z" />
        <path fill={color} d="m21 8.5-9-6.75L3 8.5V21h18z" />
      </svg>
    );
  },
);

export default ProHomeFill;
