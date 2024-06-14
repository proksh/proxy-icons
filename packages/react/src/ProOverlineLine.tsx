import * as React from "react";
import { IconProps } from "./types";

export const ProOverlineLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3h16v2H4zm14.97 19L12.927 7.124h-1.853L5.03 22h2.16l1.625-4h6.373l1.624 4zm-9.344-6L12 10.157 14.374 16z"
        />
      </svg>
    );
  },
);

export default ProOverlineLine;
