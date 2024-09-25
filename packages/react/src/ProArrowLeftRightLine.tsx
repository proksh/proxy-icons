import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.707 1.793 20.914 7l-5.207 5.207-1.414-1.414L17.086 8H4V6h13.086l-2.793-2.793zM20 16H6.914l2.793-2.793-1.414-1.414L3.086 17l5.207 5.207 1.414-1.414L6.914 18H20z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftRightLine;
