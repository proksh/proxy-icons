import * as React from "react";
import { IconProps } from "./types";

export const ProServerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v7H3zm7 2.5H7v2h3zM3 13v7l1 1h16l1-1v-7zm4 2.5h3v2H7z"
        />
      </svg>
    );
  },
);

export default ProServerFill;
