import * as React from "react";
import { IconProps } from "./types";

export const ProFile3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 2v6l1 1h6v13H4V2z" />
        <path fill={color} d="M16 2v5h5z" />
      </svg>
    );
  },
);

export default ProFile3Fill;
