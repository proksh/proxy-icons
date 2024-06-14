import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 21V2h-2v19zM6 8v13H4V8zm14 4v9h-2v-9z" />
      </svg>
    );
  },
);

export default ProBarChartLine;
