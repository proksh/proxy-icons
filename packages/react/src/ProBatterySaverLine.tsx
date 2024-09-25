import * as React from "react";
import { IconProps } from "./types";

export const ProBatterySaverLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 12V9h2v3h3v2h-3v3h-2v-3H8v-2z" />
        <path
          fill={color}
          d="m9 3 1-1h4l1 1v1h3l1 1v16l-1 1H6l-1-1V5l1-1h3zM7 6v14h10V6h-4V4h-2v2z"
        />
      </svg>
    );
  },
);

export default ProBatterySaverLine;
