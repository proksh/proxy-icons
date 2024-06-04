import * as React from "react";
import { IconProps } from "./types";

export const ProAngularjsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.065 5.331 12 1.932l-9.065 3.4L4.051 17.61 12 22.152l7.949-4.542zM5.949 16.391l-.884-9.722 6.908-2.59-5.54 12.588zM7.016 17h1.456l1.1-2.5h4.855l1.1 2.5h1.457L12 19.848zm10.55-.332-5.54-12.59 6.91 2.59-.885 9.722zM13.547 12.5h-3.095L12 8.983z"
        />
      </svg>
    );
  },
);

export default ProAngularjsLine;
