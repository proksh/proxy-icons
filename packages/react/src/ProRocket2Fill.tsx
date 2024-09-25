import * as React from "react";
import { IconProps } from "./types";

export const ProRocket2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.945.319.107A8.34 8.34 0 0 1 18 9.955v5.51l3.387 2.258-3.11 4.664L14.698 20H9.303l-3.69 2.46-2.369-4.736L6 15.52V9.955a8.34 8.34 0 0 1 5.682-7.903zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProRocket2Fill;
