import * as React from "react";
import { IconProps } from "./types";

export const ProGeminiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.507 6.514 12 1 9.493 6.514a6 6 0 0 1-2.979 2.979L1 12l5.514 2.507a6 6 0 0 1 2.979 2.979L12 23l2.507-5.514a6 6 0 0 1 2.979-2.979L23 12l-5.514-2.507a6 6 0 0 1-2.979-2.979"
        />
      </svg>
    );
  },
);

export default ProGeminiFill;
