import * as React from "react";
import { IconProps } from "./types";

export const ProTimerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 1H8v2h8zm-5 13V9h2v5z" />
        <path
          fill={color}
          d="M12 4a9 9 0 1 0 7.25 3.665l1.957-1.958-1.414-1.414-1.902 1.902A8.97 8.97 0 0 0 12 4m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        />
      </svg>
    );
  },
);

export default ProTimerLine;
