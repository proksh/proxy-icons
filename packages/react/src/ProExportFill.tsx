import * as React from "react";
import { IconProps } from "./types";

export const ProExportFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.25 9.996H16L11.99 6 8 9.996h2.75V14h2.5z" />
        <path
          fill={color}
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm12.874 10H20V5H4v8h4.126l.968.75a3.002 3.002 0 0 0 5.812 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProExportFill;