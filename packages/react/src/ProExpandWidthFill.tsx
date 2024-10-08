import * as React from "react";
import { IconProps } from "./types";

export const ProExpandWidthFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 18V6H2v12zm11.207-1.793L13.5 15.5V13h-3v2.5l-1.707.707-3.5-3.5v-1.414l3.5-3.5L10.5 8.5V11h3V8.5l1.707-.707 3.5 3.5v1.414zM22 18h-2V6h2z"
        />
      </svg>
    );
  },
);

export default ProExpandWidthFill;
