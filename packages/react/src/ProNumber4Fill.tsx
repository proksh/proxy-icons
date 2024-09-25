import * as React from "react";
import { IconProps } from "./types";

export const ProNumber4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.5 1.5h-3.285L4 15.783V18.5h9.5V22h3v-3.5H19v-3h-2.5zm-3 5.092V15.5H7.753z"
        />
      </svg>
    );
  },
);

export default ProNumber4Fill;
