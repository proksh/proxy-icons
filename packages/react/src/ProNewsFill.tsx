import * as React from "react";
import { IconProps } from "./types";

export const ProNewsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9v2h2V9z" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm4 3v6h6V7zm12 2V7h-4v2zm-4 4h4v-2h-4zm-8 4h12v-2H6z"
        />
      </svg>
    );
  },
);

export default ProNewsFill;
