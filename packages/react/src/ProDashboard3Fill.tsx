import * as React from "react";
import { IconProps } from "./types";

export const ProDashboard3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m11-5.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8.125 9.125a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1.75-4.25a.5.5 0 0 0-.826-.379l-4.775 3.393-.034.025a1.5 1.5 0 1 0 2.123 2.059l3.391-4.772a.5.5 0 0 0 .121-.326"
        />
      </svg>
    );
  },
);

export default ProDashboard3Fill;
