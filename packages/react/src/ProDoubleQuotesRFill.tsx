import * as React from "react";
import { IconProps } from "./types";

export const ProDoubleQuotesRFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 4.5h-7v7h2.605l-2.105 8H17l3-8zm-9 0H4v7h2.605l-2.105 8H8l3-8z"
        />
      </svg>
    );
  },
);

export default ProDoubleQuotesRFill;
