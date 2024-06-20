import * as React from "react";
import { IconProps } from "./types";

export const ProCake3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 10.5a4.5 4.5 0 0 1-3.101 4.278L17.867 22H6.191l-1.503-7.016a3 3 0 0 1-.686-5.814L4 9a6 6 0 0 1 8.574-5.421 3.5 3.5 0 0 1 6.35 2.651A4.5 4.5 0 0 1 22 10.5M15 15h-2v5h2zm-4 0H9v5h2zm6.5-2a2.5 2.5 0 1 0-1.576-4.44c-.694.564-1.814.27-2.074-.651a4 4 0 0 0-7.784 1.815A1.082 1.082 0 0 1 5 11a1 1 0 1 0 0 2z"
        />
      </svg>
    );
  },
);

export default ProCake3Fill;
