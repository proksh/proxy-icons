import * as React from "react";
import { IconProps } from "./types";

export const ProZzzLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 5h5l-4.8 6.4.8 1.6h6.5v-2H16l4.8-6.4L20 3h-7zM3 13h5l-4.8 6.4L4 21h6.5v-2H6l4.8-6.4L10 11H3z"
        />
      </svg>
    );
  },
);

export default ProZzzLine;
