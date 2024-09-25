import * as React from "react";
import { IconProps } from "./types";

export const ProNumber6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.734 2 5.918 12.532a7 7 0 1 0 5.357-3.495L15.161 2zM16 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
      </svg>
    );
  },
);

export default ProNumber6Fill;
