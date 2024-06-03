import * as React from "react";
import { IconProps } from "./types";

export const ProBarcodeBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4v16l1 1h18l1-1V4l-1-1H3zm4 3h3v10H6zm9 0h3v10h-3zm-1 0v10h-1V7zm-4 0h2v10h-2z"
        />
      </svg>
    );
  },
);

export default ProBarcodeBoxFill;
