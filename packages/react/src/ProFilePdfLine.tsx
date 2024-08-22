import * as React from "react";
import { IconProps } from "./types";

export const ProFilePdfLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8H8v8h4a4 4 0 0 0 0-8m-2 6v-4h2a2 2 0 1 1 0 4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M15.914 2H3v20h18V7.086zM15 4H5v16h14V8h-4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFilePdfLine;
