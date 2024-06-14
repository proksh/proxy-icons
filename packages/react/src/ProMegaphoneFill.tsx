import * as React from "react";
import { IconProps } from "./types";

export const ProMegaphoneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.36 2.732a22.4 22.4 0 0 1-4.781 3.048A15 15 0 0 1 11 6.721V17.28c.815.207 1.686.526 2.579.94a22.4 22.4 0 0 1 4.78 3.05L20 20.5V14a2 2 0 1 0 0-4V3.5zM9 7H4L3 8v8l1 1h2.167L7 22h2z"
        />
      </svg>
    );
  },
);

export default ProMegaphoneFill;
