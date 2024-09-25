import * as React from "react";
import { IconProps } from "./types";

export const ProBodyScanLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.771 8.543A4.51 4.51 0 0 0 11 11.389V17h2v-5.558h.001v-.054a4.51 4.51 0 0 0 3.482-3.99Q16.5 7.2 16.5 7h2a6.5 6.5 0 0 1-.498 2.5 6.53 6.53 0 0 1-3 3.267L15 19H9v-6.232A6.52 6.52 0 0 1 5.886 9.21 6.5 6.5 0 0 1 5.5 7h2c0 .542.096 1.061.271 1.543"
        />
        <path
          fill={color}
          d="M12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M4 4v4H2V2h6v2zM2 22h6v-2H4v-4H2zM22 2v6h-2V4h-4V2zm0 20h-6v-2h4v-4h2z"
        />
      </svg>
    );
  },
);

export default ProBodyScanLine;
