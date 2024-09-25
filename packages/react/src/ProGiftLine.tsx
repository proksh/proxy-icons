import * as React from "react";
import { IconProps } from "./types";

export const ProGiftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3.05A3.5 3.5 0 1 1 16.95 8H23v2h-2v12H3V10H1V8h6.05A3.5 3.5 0 1 1 12 3.05M9.5 4a1.5 1.5 0 1 0 0 3H11V5.5A1.5 1.5 0 0 0 9.5 4M13 5.5V7h1.5A1.5 1.5 0 1 0 13 5.5m6 8.5v-4h-6v4zm0 2h-6v4h6zm-8-2v-4H5v4zm-6 2v4h6v-4z"
        />
      </svg>
    );
  },
);

export default ProGiftLine;
