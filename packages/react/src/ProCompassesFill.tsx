import * as React from "react";
import { IconProps } from "./types";

export const ProCompassesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 4.126a4.002 4.002 0 0 1 1.79 6.74l6.078 10.638-1.736.992-6.078-10.636a4 4 0 0 1-2.108 0L4.868 22.496l-1.736-.992L9.21 10.867A4.002 4.002 0 0 1 11 4.127V1.999h2zM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
      </svg>
    );
  },
);

export default ProCompassesFill;
