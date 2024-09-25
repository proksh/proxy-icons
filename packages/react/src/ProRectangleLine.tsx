import * as React from "react";
import { IconProps } from "./types";

export const ProRectangleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 4h20v16H2zm2 2v12h16V6z" />
      </svg>
    );
  },
);

export default ProRectangleLine;
