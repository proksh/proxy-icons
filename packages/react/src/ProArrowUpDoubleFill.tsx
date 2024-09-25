import * as React from "react";
import { IconProps } from "./types";

export const ProArrowUpDoubleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.293 9.293 7 11h10l.707-1.707-5-5h-1.414zm0 9L7 20h10l.707-1.707-5-5h-1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowUpDoubleFill;
