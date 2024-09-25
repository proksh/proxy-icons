import * as React from "react";
import { IconProps } from "./types";

export const ProNumber5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.605 2H18v2H9.395l-.698 6.284.34-.17c4.354-2.178 9.463 1.018 9.463 5.871 0 3.587-2.907 6.515-6.5 6.515A6.5 6.5 0 0 1 5.5 16h2a4.5 4.5 0 0 0 4.5 4.5c2.482 0 4.5-2.026 4.5-4.515 0-3.38-3.557-5.588-6.568-4.083l-1.985.992-1.44-1.004z"
        />
      </svg>
    );
  },
);

export default ProNumber5Line;
