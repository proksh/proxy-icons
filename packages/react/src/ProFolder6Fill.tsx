import * as React from "react";
import { IconProps } from "./types";

export const ProFolder6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 3h8.414L12 4.586 9.586 7H2z" />
        <path fill={color} d="M2 9v12h20V5h-7.586l-4 4z" />
      </svg>
    );
  },
);

export default ProFolder6Fill;
