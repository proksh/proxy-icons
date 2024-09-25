import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBookLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 5a2 2 0 0 0-2 2v1h6v-1a2 2 0 0 0-2-2z"
        />
        <path
          fill={color}
          d="M20 2H3v20h17l1-1V3zM5 20V4h2v16zm4 0V4h10v16zm13-4h2v-4h-2zm2-10h-2v4h2z"
        />
      </svg>
    );
  },
);

export default ProContactsBookLine;
