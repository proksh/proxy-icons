import * as React from "react";
import { IconProps } from "./types";

export const ProBarChartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13.5 21V2h-3v19zm-7-13v13h-3V8zm14 4v9h-3v-9z" />
      </svg>
    );
  },
);

export default ProBarChartFill;
