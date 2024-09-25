import * as React from "react";
import { IconProps } from "./types";

export const ProFilmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v18H2zm2 14v2h2v-2zm0-2h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4-2v14h8V5zm12 14v-2h-2v2zm-2-6v2h2v-2zm0-4v2h2V9zm0-4v2h2V5z"
        />
      </svg>
    );
  },
);

export default ProFilmLine;
