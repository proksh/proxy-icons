import * as React from "react";
import { IconProps } from "./types";

export const ProListUnorderedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6.5h13v-3H8zm-3.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m16.5-7H8v-3h13zm-13 7h13v-3H8zM6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProListUnorderedFill;
