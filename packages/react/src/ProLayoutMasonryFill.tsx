import * as React from "react";
import { IconProps } from "./types";

export const ProLayoutMasonryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 3h9v5h-9zm-2 0H2v11h9zM2 16v5h9v-5zm11 5h9V10h-9z"
        />
      </svg>
    );
  },
);

export default ProLayoutMasonryFill;
