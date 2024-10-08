import * as React from "react";
import { IconProps } from "./types";

export const ProStarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.092 2.581 8.505 8.19l-6.133.727-.562 1.727 4.535 4.193-1.204 6.058 1.47 1.068L12 18.946l5.39 3.017 1.469-1.068-1.204-6.058 4.534-4.193-.56-1.727-6.134-.727-2.587-5.609z"
        />
      </svg>
    );
  },
);

export default ProStarFill;
