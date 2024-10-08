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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2.475-6.11L12 13.413 9.525 15.89l-1.414-1.414L10.586 12 8.11 9.525l1.414-1.414L12 10.586l2.475-2.475 1.414 1.414L13.414 12l2.475 2.475z"
        />
      </svg>
    );
  },
);

export default ProCloseCircleFill;
