import * as React from "react";
import { IconProps } from "./types";

export const ProNumber2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a6.5 6.5 0 0 0-6.5 6.5h3a3.5 3.5 0 0 1 7 0v.095c0 .867-.313 1.704-.882 2.358L5.5 20.44v2.06H18v-3h-7.708l6.59-7.578A6.6 6.6 0 0 0 18.5 7.595V7.5A6.5 6.5 0 0 0 12 1"
        />
      </svg>
    );
  },
);

export default ProNumber2Fill;
