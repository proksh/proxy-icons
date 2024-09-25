import * as React from "react";
import { IconProps } from "./types";

export const ProHandFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 0A1.5 1.5 0 0 0 11 1.5V11h-.5V3.5a1.5 1.5 0 1 0-3 0v9L5.7 9.125a1.799 1.799 0 0 0-3.21 1.625l3.77 7.853A7.752 7.752 0 0 0 21 15.248V6a1.5 1.5 0 0 0-3 0v5h-.5V3a1.5 1.5 0 0 0-3 0v8H14V1.5A1.5 1.5 0 0 0 12.5 0"
        />
      </svg>
    );
  },
);

export default ProHandFill;
