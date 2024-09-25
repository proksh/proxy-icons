import * as React from "react";
import { IconProps } from "./types";

export const ProSuitcase3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 1 8 2v5H7V6H5v1H4L3 8v12l1 1h1v1h2v-1h10v1h2v-1h1l1-1V8l-1-1h-1V6h-2v1h-1V2l-1-1zm5 6h-4V3h4zm-7 3h2v8H7zm4 0h2v8h-2zm4 8v-8h2v8z"
        />
      </svg>
    );
  },
);

export default ProSuitcase3Fill;
