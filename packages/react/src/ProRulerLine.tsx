import * as React from "react";
import { IconProps } from "./types";

export const ProRulerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m.54 17.303 6.364 6.364L23.168 7.404 16.804 1.04zm12.728-9.9 1.414 1.415 1.414-1.414-1.414-1.414 2.121-2.122 3.536 3.536L6.904 20.839l-3.536-3.536 2.829-2.828L7.61 15.89l1.414-1.414L7.61 13.06l2.122-2.122 2.12 2.122 1.415-1.415-2.121-2.121z"
        />
      </svg>
    );
  },
);

export default ProRulerLine;
