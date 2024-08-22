import * as React from "react";
import { IconProps } from "./types";

export const ProFile2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 2v6l-1 1H4v13h17V2z" />
        <path fill={color} d="M9 2v5H4z" />
      </svg>
    );
  },
);

export default ProFile2Fill;
