import * as React from "react";
import { IconProps } from "./types";

export const ProLinkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.778 4.222a7 7 0 0 0-9.9 0L8.623 5.479l1.414 1.414 1.257-1.257a5 5 0 0 1 7.071 7.071l-1.257 1.257 1.414 1.414 1.257-1.257a7 7 0 0 0 0-9.9M5.636 11.293l1.257-1.257L5.48 8.622 4.222 9.879a7 7 0 0 0 9.9 9.9l1.257-1.258-1.415-1.414-1.257 1.257a5 5 0 0 1-7.07-7.071"
        />
        <path
          fill={color}
          d="M14.829 7.757 7.757 14.83l1.415 1.414 7.07-7.071z"
        />
      </svg>
    );
  },
);

export default ProLinkLine;
