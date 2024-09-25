import * as React from "react";
import { IconProps } from "./types";

export const ProProjector2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 13h2v2H5zm5 0H8v2h2z" />
        <path
          fill={color}
          d="M19.584 5a5.001 5.001 0 0 0-9.168 0H2L1 6v12l1 1v2h2v-2h16v2h2v-2l1-1V6l-1-1zM12 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-2 0a5 5 0 0 0 10 0h1v10H3V7z"
        />
      </svg>
    );
  },
);

export default ProProjector2Line;
