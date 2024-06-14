import * as React from "react";
import { IconProps } from "./types";

export const ProListCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 6.5h13v-3H8zm-2 11H3v3h3zm15-4H8v-3h13zm-13 7h13v-3H8zm-5-17h3v3H3zm3 7H3v3h3z"
        />
      </svg>
    );
  },
);

export default ProListCheckFill;
