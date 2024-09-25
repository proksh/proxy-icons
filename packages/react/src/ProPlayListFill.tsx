import * as React from "react";
import { IconProps } from "./types";

export const ProPlayListFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 6.5h20v-3H2zM19 9h5v2h-3v7a3 3 0 1 1-2-2.83zm-4 4.5H2v-3h13zm-13 7h10v-3H2z"
        />
      </svg>
    );
  },
);

export default ProPlayListFill;
