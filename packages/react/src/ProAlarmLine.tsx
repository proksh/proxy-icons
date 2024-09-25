import * as React from "react";
import { IconProps } from "./types";

export const ProAlarmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2.707 7.707 4.5-4.5-1.414-1.414-4.5 4.5zm14.086-4.5 4.5 4.5 1.414-1.414-4.5-4.5zM11 15V8h2v5h3v2z"
        />
        <path
          fill={color}
          d="M12 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        />
      </svg>
    );
  },
);

export default ProAlarmLine;
