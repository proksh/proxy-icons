import * as React from "react";
import { IconProps } from "./types";

export const ProDragMove2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.293 5.793 3-3h1.414l3 3L15 7.5h-2V11h3.5V9l1.707-.707 3 3v1.414l-3 3L16.5 15v-2H13v3.5h2l.707 1.707-3 3h-1.414l-3-3L9 16.5h2V13H7.5v2l-1.707.707-3-3v-1.414l3-3L7.5 9v2H11V7.5H9z"
        />
      </svg>
    );
  },
);

export default ProDragMove2Fill;
