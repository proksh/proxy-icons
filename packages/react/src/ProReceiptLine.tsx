import * as React from "react";
import { IconProps } from "./types";

export const ProReceiptLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3.798 5.966 1.775 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-2.966-2.225L15 3.798l-3-2zM8.83 20H20a1 1 0 0 0 1-1v-1H9v1c0 .35-.06.687-.17 1M7 16h12V5l-1.034-.776L15 6.203l-3-2-3 2-2.966-1.977L5 5v14a1 1 0 1 0 2 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProReceiptLine;
