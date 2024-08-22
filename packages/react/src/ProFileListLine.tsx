import * as React from "react";
import { IconProps } from "./types";

export const ProFileListLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 9h8V7H8zm8 4H8v-2h8zm-8 4h8v-2H8z" />
        <path
          fill={color}
          d="M21 2H3v20h18zM5 20V4h14v16z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileListLine;
