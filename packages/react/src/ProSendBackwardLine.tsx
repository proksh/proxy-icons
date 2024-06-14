import * as React from "react";
import { IconProps } from "./types";

export const ProSendBackwardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h14v6h4v12H9v-4H3zm6 12V9h6V5H5v10zm2 4h8v-8h-8z"
        />
      </svg>
    );
  },
);

export default ProSendBackwardLine;
