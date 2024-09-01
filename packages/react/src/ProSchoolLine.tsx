import * as React from "react";
import { IconProps } from "./types";

export const ProSchoolLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m18 6.586-6-6-6 6V9H2v10H1v2h22v-2h-1V9h-4zM6 19H4v-8h2zm14 0h-2v-8h2zM8 19V7.414l4-4 4 4V19h-3v-7h-2v7z"
        />
      </svg>
    );
  },
);

export default ProSchoolLine;
