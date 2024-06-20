import * as React from "react";
import { IconProps } from "./types";

export const ProGiftFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M9.5 2a3.5 3.5 0 0 0-2.45 6H1v2h3v5h7v-5h2v5h7v-5h3V8h-6.05A3.5 3.5 0 1 0 12 3.05 3.5 3.5 0 0 0 9.5 2M8 5.5a1.5 1.5 0 1 1 3 0V7H9.5A1.5 1.5 0 0 1 8 5.5M13 7V5.5A1.5 1.5 0 1 1 14.5 7zM4 17v5h7v-5zm9 5h7v-5h-7z"
        />
      </svg>
    );
  },
);

export default ProGiftFill;
