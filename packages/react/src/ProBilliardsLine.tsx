import * as React from "react";
import { IconProps } from "./types";

export const ProBilliardsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1.25 4.5c0-.461.462-1 1.25-1s1.25.539 1.25 1-.462 1-1.25 1-1.25-.539-1.25-1"
        />
        <path
          fill={color}
          d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-3.5-1.75a2.5 2.5 0 0 1-.633 1.663c.533.443.883 1.081.883 1.837 0 1.472-1.328 2.5-2.75 2.5s-2.75-1.028-2.75-2.5c0-.756.35-1.394.883-1.837A2.5 2.5 0 1 1 14.5 10.25"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProBilliardsLine;
