import * as React from "react";
import { IconProps } from "./types";

export const ProWheelchairLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0-3 3v6h7.434l2.708 4.515 1.716-1.03L17.566 15H15v-4a3 3 0 0 0-3-3 3 3 0 1 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m2 10h-2v-4a1 1 0 1 1 2 0z"
        />
        <path
          fill={color}
          d="M4 16a6 6 0 0 1 4-5.659v2.194A4 4 0 1 0 13.465 18h2.194A6 6 0 0 1 4 16"
        />
      </svg>
    );
  },
);

export default ProWheelchairLine;
