import * as React from "react";
import { IconProps } from "./types";

export const ProCornerLeftDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 7h7V5h-9v8H5.5l-.707 1.707 5.5 5.5h1.414l5.5-5.5L16.5 13H12z"
        />
      </svg>
    );
  },
);

export default ProCornerLeftDownFill;
