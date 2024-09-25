import * as React from "react";
import { IconProps } from "./types";

export const ProFile4Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 22H4V2h17v13h-6l-1 1z" />
        <path fill={color} d="m16 22 5-5h-5z" />
      </svg>
    );
  },
);

export default ProFile4Fill;
