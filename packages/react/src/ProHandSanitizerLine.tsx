import * as React from "react";
import { IconProps } from "./types";

export const ProHandSanitizerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 14v-2h2v2h2v2h-2v2h-2v-2H9v-2z" />
        <path
          fill={color}
          d="M5.28 2.8c.96-.685 2.1-.8 3.018-.8H17v2h-4v2h3v2h3l1 1v12l-1 1H5l-1-1V9l1-1h3V6h3V4H8.298c-.8 0-1.417.115-1.857.428-.386.275-.79.65-1.109 1.127l-1.664-1.11A6.4 6.4 0 0 1 5.281 2.8M6 20h12V10H6z"
        />
      </svg>
    );
  },
);

export default ProHandSanitizerLine;
