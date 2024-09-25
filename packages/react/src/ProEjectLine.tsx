import * as React from "react";
import { IconProps } from "./types";

export const ProEjectLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.868 15 12 3.197 4.13 15zm-3.737-2H7.868L12 6.803zM4 19h16v-2H4z"
        />
      </svg>
    );
  },
);

export default ProEjectLine;
