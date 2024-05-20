import * as React from "react";
import { IconProps } from "./types";

export const ProCloseCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m12.475 3.89L12 13.413 9.525 15.89l-1.414-1.414L10.586 12 8.11 9.525l1.414-1.414L12 10.586l2.475-2.475 1.414 1.414L13.414 12l2.475 2.475z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProCloseCircleFill;
