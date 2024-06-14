import * as React from "react";
import { IconProps } from "./types";

export const ProTentLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.078 19 12 1.496 1.922 19H0v2h24v-2zm-2.308 0h-3.672L12 11.39 7.903 19H4.23L12 5.504zm-9.596 0L12 15.61 13.826 19z"
        />
      </svg>
    );
  },
);

export default ProTentLine;
