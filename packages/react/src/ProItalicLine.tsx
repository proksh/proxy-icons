import * as React from "react";
import { IconProps } from "./types";

export const ProItalicLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 6h-2.78l-2.4 12H15v2H7v-2h2.78l2.4-12H9V4h8z"
        />
      </svg>
    );
  },
);

export default ProItalicLine;
