import * as React from "react";
import { IconProps } from "./types";

export const ProAttachmentBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 6a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V7.77h-2V13a3 3 0 1 1-6 0V9a1 1 0 0 1 2 0v5.436h2V9a3 3 0 0 0-3-3"
        />
        <path
          fill={color}
          d="M3 2 2 3v18l1 1h18l1-1V3l-1-1zm1 18V4h16v16z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAttachmentBoxLine;
