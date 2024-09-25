import * as React from "react";
import { IconProps } from "./types";

export const ProEraserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.577 19H21v2H8v.02L.586 13.608 12.607 1.586l9.192 9.192zm2.566-5.393 2.828-2.829-6.364-6.364-2.828 2.829z"
        />
      </svg>
    );
  },
);

export default ProEraserFill;
