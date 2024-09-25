import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M21 6.912 10 .8v9.183l-7-3V21h18z" />
      </svg>
    );
  },
);

export default ProBuilding3Fill;
