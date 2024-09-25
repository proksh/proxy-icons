import * as React from "react";
import { IconProps } from "./types";

export const ProProfileLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 8 1-1h4l1 1v4l-1 1H6l-1-1zm2 1v2h2V9zm12-2h-6v2h6zm-6 4h6v2h-6zm6 4H5v2h14z"
        />
        <path fill={color} d="m1 4 1-1h20l1 1v16l-1 1H2l-1-1zm2 1v14h18V5z" />
      </svg>
    );
  },
);

export default ProProfileLine;
