import * as React from "react";
import { IconProps } from "./types";

export const ProClockwise2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.707 4.293-3.5-3.5L9.5 1.5V4H8a5 5 0 0 0-5 5v4h2V9a3 3 0 0 1 3-3h1.5v2.5l1.707.707 3.5-3.5zM20 10l1 1v10l-1 1H10l-1-1V11l1-1z"
        />
      </svg>
    );
  },
);

export default ProClockwise2Fill;
