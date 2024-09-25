import * as React from "react";
import { IconProps } from "./types";

export const ProAccountBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 18a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2z"
        />
        <path
          fill={color}
          d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-1.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm2 1v14h14V5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAccountBoxLine;
