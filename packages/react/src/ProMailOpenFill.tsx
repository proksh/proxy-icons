import * as React from "react";
import { IconProps } from "./types";

export const ProMailOpenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 .798 10 6.667V21H2V7.465zM6.64 9.232l-1.28 1.536L12 16.302l6.64-5.534-1.28-1.536L12 13.698z"
        />
      </svg>
    );
  },
);

export default ProMailOpenFill;
