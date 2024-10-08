import * as React from "react";
import { IconProps } from "./types";

export const ProAlarmFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2.707 7.707 4.5-4.5-1.414-1.414-4.5 4.5zm14.086-4.5 4.5 4.5 1.414-1.414-4.5-4.5zM12 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-1 11V8h2v5h2.5v2z"
        />
      </svg>
    );
  },
);

export default ProAlarmFill;
