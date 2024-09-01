import * as React from "react";
import { IconProps } from "./types";

export const ProFileZipLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8h-2V6h2zm0 2V8h2v2zm0 2h-2v-2h2zm2 0h-2v2h-2v3h4z"
        />
        <path fill={color} d="M3 2h18v20H3zm2 2v16h14V4h-5v2h-2V4z" />
      </svg>
    );
  },
);

export default ProFileZipLine;
