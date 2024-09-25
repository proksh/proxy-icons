import * as React from "react";
import { IconProps } from "./types";

export const ProFontColorLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.189 18 1.625-4h6.373l1.624 4h2.16L12.926 3.124h-1.853L5.03 18zM12 6.157 14.374 12H9.627zM21 20H3v2h18z"
        />
      </svg>
    );
  },
);

export default ProFontColorLine;
