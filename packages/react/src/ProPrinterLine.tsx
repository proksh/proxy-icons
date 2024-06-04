import * as React from "react";
import { IconProps } from "./types";

export const ProPrinterLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 12h3v-2H5z" />
        <path
          fill={color}
          d="m6 3 1-1h10l1 1v4h4v12h-3v3H5v-3H2V7h4zm10 1H8v3h8zM4 9v8h1v-2h14v2h1V9zm3 11h10v-3H7z"
        />
      </svg>
    );
  },
);

export default ProPrinterLine;
