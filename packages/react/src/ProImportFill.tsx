import * as React from "react";
import { IconProps } from "./types";

export const ProImportFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.25 10.004H16L11.99 14 8 10.004h2.75V6h2.5z" />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm12.874 10-.969.75a3.002 3.002 0 0 1-5.81 0l-.97-.75H4V5h16v8z"
        />
      </svg>
    );
  },
);

export default ProImportFill;
