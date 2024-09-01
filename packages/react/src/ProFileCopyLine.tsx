import * as React from "react";
import { IconProps } from "./types";

export const ProFileCopyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 2 7 3v3H4L3 7v14l1 1h12l1-1v-3h3l1-1V3l-1-1zm9 14V7l-1-1H9V4h10v12zM5 20V8h10v12z"
        />
      </svg>
    );
  },
);

export default ProFileCopyLine;
