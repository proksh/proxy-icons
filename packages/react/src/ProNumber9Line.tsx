import * as React from "react";
import { IconProps } from "./types";

export const ProNumber9Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.5a6.5 6.5 0 1 0 1.672 12.783L9.41 22h2.285l5.954-10.782A6.5 6.5 0 0 0 12 1.5M7.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        />
      </svg>
    );
  },
);

export default ProNumber9Line;
