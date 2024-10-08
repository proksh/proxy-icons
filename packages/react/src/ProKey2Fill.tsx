import * as React from "react";
import { IconProps } from "./types";

export const ProKey2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.868 12.854a5 5 0 1 0 7.708.777l2.545-2.545 2.122 2.121 2.121-2.121-2.121-2.122.353-.353 2.828 2.828 2.122-2.121-2.829-2.828.708-.708-1.415-1.414-7.849 7.85a5 5 0 0 0-6.293.636m4.95 4.95a2 2 0 1 1-2.828-2.829 2 2 0 0 1 2.828 2.828"
        />
      </svg>
    );
  },
);

export default ProKey2Fill;
