import * as React from "react";
import { IconProps } from "./types";

export const ProFilter2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 8.5H3v-3h18zm-3 5H6v-3h12zm-9 5h6v-3H9z" />
      </svg>
    );
  },
);

export default ProFilter2Fill;
