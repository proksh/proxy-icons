import * as React from "react";
import { IconProps } from "./types";

export const ProFontSansLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.64 21V4.09h10.266v1.898H9.75v5.813h7.488v1.875H9.75V21z"
        />
      </svg>
    );
  },
);

export default ProFontSansLine;
