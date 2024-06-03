import * as React from "react";
import { IconProps } from "./types";

export const ProSave2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M14 6H6v3h8z"
        />
        <path
          fill={color}
          d="m3 4 1-1h12.5l.707.293 3.5 3.5L21 7.5V20l-1 1H4l-1-1zm2 1v14h14V7.914L16.086 5z"
        />
      </svg>
    );
  },
);

export default ProSave2Line;
