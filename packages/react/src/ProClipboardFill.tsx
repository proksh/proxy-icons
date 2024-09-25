import * as React from "react";
import { IconProps } from "./types";

export const ProClipboardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 4H4L3 5v16l1 1h16l1-1V5l-1-1h-2v4H6z" />
        <path fill={color} d="M16 6H8V2h8z" />
      </svg>
    );
  },
);

export default ProClipboardFill;
