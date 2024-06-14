import * as React from "react";
import { IconProps } from "./types";

export const ProDoorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11v2h2v-2z" />
        <path fill={color} d="M6 3 5 4v16l1 1h12l1-1V4l-1-1zm1 16V5h10v14z" />
      </svg>
    );
  },
);

export default ProDoorLine;
