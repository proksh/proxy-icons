import * as React from "react";
import { IconProps } from "./types";

export const ProCornerLeftDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 7h-7v10.086l3.793-3.793 1.414 1.414L11 20.914l-6.207-6.207 1.414-1.414L10 17.086V5h9z"
        />
      </svg>
    );
  },
);

export default ProCornerLeftDownLine;
