import * as React from "react";
import { IconProps } from "./types";

export const ProPagesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m3 3 1-1h16l1 1v2H3zm6 9v1h1v-1z" />
        <path
          fill={color}
          d="M3 7v14l1 1h16l1-1V7zm10 5v-2h4v2zm4 3h-4v-2h4zm0 3H7v-2h10zM7 10h5v5H7z"
        />
      </svg>
    );
  },
);

export default ProPagesFill;
