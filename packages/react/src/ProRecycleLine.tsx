import * as React from "react";
import { IconProps } from "./types";

export const ProRecycleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.495 8.343 12 4.005l2.81 4.867-2.394-.448-.367 1.966 5.44 1.018 1.339-4.992-1.932-.518-.474 1.767-3.556-6.16h-1.732L7.763 7.343zm-1.672 6.592 1.887-.664-1.84-5.222-4.99 1.338.517 1.932 1.767-.474-3.557 6.16.867 1.5H9.5v-2H4.205l2.81-4.867zm6.417-.585 1.52 1.3-1.586 1.85h5.62l-2.487-4.307 1.732-1L22.393 18l-.866 1.5h-7.113l1.293 1.293-1.414 1.414-3.655-3.655z"
        />
      </svg>
    );
  },
);

export default ProRecycleLine;