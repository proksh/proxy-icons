import * as React from "react";
import { IconProps } from "./types";

export const ProKnifeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M22.374 19.44a1.5 1.5 0 1 1-2.121 2.12l-4.596-4.595L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587l.173-.179z"
        />
      </svg>
    );
  },
);

export default ProKnifeFill;
