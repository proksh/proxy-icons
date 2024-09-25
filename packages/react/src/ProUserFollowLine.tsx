import * as React from "react";
import { IconProps } from "./types";

export const ProUserFollowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M8 14a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3h8c.767 0 1.466.288 1.997.76l1.415-1.415A4.98 4.98 0 0 0 16 14zm9.433 8.981 5.274-5.274-1.414-1.414-3.726 3.726-1.799-2.16-1.536 1.281z"
        />
      </svg>
    );
  },
);

export default ProUserFollowLine;
