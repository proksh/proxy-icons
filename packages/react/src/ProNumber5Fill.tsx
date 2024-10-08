import * as React from "react";
import { IconProps } from "./types";

export const ProNumber5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.157 1.5H18v3H9.843l-.55 4.948C13.869 7.557 19 10.94 19 15.985 19 19.846 15.871 23 12 23a7 7 0 0 1-7-7h3a4 4 0 0 0 4 4c2.204 0 4-1.8 4-4.015 0-3.012-3.169-4.973-5.845-3.636l-1.984.993-2.162-1.508z"
        />
      </svg>
    );
  },
);

export default ProNumber5Fill;
