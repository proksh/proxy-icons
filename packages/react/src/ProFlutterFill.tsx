import * as React from "react";
import { IconProps } from "./types";

export const ProFlutterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.504 2.001-10 10 3.083 3.083 13.08-13.083zm-.005 9.198-5.376 5.42L13.496 22h6.188l-5.387-5.4 5.389-5.4z"
        />
      </svg>
    );
  },
);

export default ProFlutterFill;
