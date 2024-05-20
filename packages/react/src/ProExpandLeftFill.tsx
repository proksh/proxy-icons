import * as React from "react";
import { IconProps } from "./types";

export const ProExpandLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18 5v14h2.5V5zM3.824 11.263l6-5.5L11.5 6.5V11H16v2h-4.5v4.5l-1.676.737-6-5.5z"
        />
      </svg>
    );
  },
);

export default ProExpandLeftFill;
