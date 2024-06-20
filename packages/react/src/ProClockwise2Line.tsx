import * as React from "react";
import { IconProps } from "./types";

export const ProClockwise2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.207.793 8.793 2.207 10.586 4H8a5 5 0 0 0-5 5v4h2V9a3 3 0 0 1 3-3h2.586L8.793 7.793l1.414 1.414L14.414 5zM20 10l1 1v10l-1 1H10l-1-1V11l1-1zm-1 10v-8h-8v8z"
        />
      </svg>
    );
  },
);

export default ProClockwise2Line;
