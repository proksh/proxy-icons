import * as React from "react";
import { IconProps } from "./types";

export const ProFileExcel2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.021 8H10.58L9 10.256 7.42 8H4.98l2.8 4-2.8 4h2.44L9 13.744 10.58 16h2.44l-2.8-4z"
        />
        <path
          fill={color}
          d="M14.836 1.014 16 2v20l-1.164.986L2 20.847V3.153zM4 4.847v14.306l10 1.667V3.18zM20 5h-3V3h4l1 1v16l-1 1h-4v-2h3z"
        />
      </svg>
    );
  },
);

export default ProFileExcel2Line;
