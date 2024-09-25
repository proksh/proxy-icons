import * as React from "react";
import { IconProps } from "./types";

export const ProArchiveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15 12H9v2h6z" />
        <path
          fill={color}
          d="M2 3h20v7h-1v11H3V10H2zm18 2H4v3h16zM5 10v9h14v-9z"
        />
      </svg>
    );
  },
);

export default ProArchiveLine;
