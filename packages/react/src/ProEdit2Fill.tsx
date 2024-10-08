import * as React from "react";
import { IconProps } from "./types";

export const ProEdit2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.97 4.828 16.729.586 13.9 3.414l4.243 4.243zm-4.242 4.243-4.243-4.243L3 14.314v4.242h4.243zM21 22H3v-2h18z"
        />
      </svg>
    );
  },
);

export default ProEdit2Fill;
