import * as React from "react";
import { IconProps } from "./types";

export const ProLinkUnlinkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 5V2h2v5H2V5zm12 12h5v2h-3v3h-2zm2.778-12.778a7 7 0 0 0-9.9 0L8.623 5.479l1.414 1.414 1.257-1.257a5 5 0 0 1 7.07 7.071l-1.256 1.257 1.414 1.414 1.257-1.257a7 7 0 0 0 0-9.9M5.636 11.293l1.257-1.257L5.479 8.62 4.222 9.88a7 7 0 1 0 9.9 9.899l1.256-1.257-1.414-1.414-1.257 1.257a5 5 0 1 1-7.071-7.071"
        />
        <path
          fill={color}
          d="m7.757 14.828 7.071-7.07 1.415 1.413-7.071 7.072z"
        />
      </svg>
    );
  },
);

export default ProLinkUnlinkLine;
