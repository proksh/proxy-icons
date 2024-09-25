import * as React from "react";
import { IconProps } from "./types";

export const ProDropdownListLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h20v6h-2V5H4v14h9v2H2z" />
        <path
          fill={color}
          d="m19 10.586 3.707 3.707-1.414 1.414L19 13.414l-2.293 2.293-1.414-1.414zm-3.707 8.121L19 22.414l3.707-3.707-1.414-1.414L19 19.586l-2.293-2.293z"
        />
      </svg>
    );
  },
);

export default ProDropdownListLine;
