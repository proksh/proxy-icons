import * as React from "react";
import { IconProps } from "./types";

export const ProPrinterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2 6 3v3h12V3l-1-1zm15 5H2v12h3v-4h14v4h3zM8 12H5v-2h3z"
        />
        <path fill={color} d="M17 17H7v4h10z" />
      </svg>
    );
  },
);

export default ProPrinterFill;
