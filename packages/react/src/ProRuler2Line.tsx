import * as React from "react";
import { IconProps } from "./types";

export const ProRuler2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h9v9h9v9H3zm2 13v3h3v-2h2v2h2v-3h2v3h2v-2h2v2h1v-5h-9V5H5v1h2v2H5v2h3v2H5v2h2v2z"
        />
      </svg>
    );
  },
);

export default ProRuler2Line;
