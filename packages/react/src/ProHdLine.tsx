import * as React from "react";
import { IconProps } from "./types";

export const ProHdLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.75 9h2.75c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 15.5 15h-2.75zm1.5 1.5v3h1.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM6.75 9v6h1.5v-2.25h1.5V15h1.5V9h-1.5v2.25h-1.5V9z"
        />
        <path fill={color} d="M2 3h20v18H2zm2 2v14h16V5z" />
      </svg>
    );
  },
);

export default ProHdLine;
