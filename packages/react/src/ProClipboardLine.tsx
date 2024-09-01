import * as React from "react";
import { IconProps } from "./types";

export const ProClipboardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 2H7v2H4L3 5v16l1 1h16l1-1V5l-1-1h-3zm0 4h2v14H5V6h2v2h10zm-2 0H9V4h6z"
        />
      </svg>
    );
  },
);

export default ProClipboardLine;
