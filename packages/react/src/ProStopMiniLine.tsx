import * as React from "react";
import { IconProps } from "./types";

export const ProStopMiniLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m6 7 1-1h10l1 1v10l-1 1H7l-1-1zm2 1v8h8V8z" />
      </svg>
    );
  },
);

export default ProStopMiniLine;
