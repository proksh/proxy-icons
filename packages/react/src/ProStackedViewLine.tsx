import * as React from "react";
import { IconProps } from "./types";

export const ProStackedViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2 3 3v11l1 1h16l1-1V3l-1-1zm1 11V4h14v9zm-1 4-1 1v4h2v-3h14v3h2v-4l-1-1z"
        />
      </svg>
    );
  },
);

export default ProStackedViewLine;
