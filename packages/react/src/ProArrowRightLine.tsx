import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m17.086 11-6.293-6.293 1.414-1.414L20.914 12l-8.707 8.707-1.414-1.414L17.086 13H3.5v-2z"
        />
      </svg>
    );
  },
);

export default ProArrowRightLine;
