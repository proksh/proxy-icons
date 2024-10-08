import * as React from "react";
import { IconProps } from "./types";

export const ProShareForwardLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13 4.5 1.63-.776 8 6.5v1.552l-8 6.5L13 17.5V14h-2a7 7 0 0 0-6.27 3.883l-1.886-.577C3.52 12.156 7.756 8.128 13 7.776zm2 2.101v3.177l-1.024-.025-.226-.003a8.98 8.98 0 0 0-6.96 3.294A8.96 8.96 0 0 1 11 12h4v3.399L20.414 11z"
        />
      </svg>
    );
  },
);

export default ProShareForwardLine;
