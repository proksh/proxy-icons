import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M2 3h20v2H2zm16 7h-5v2h5zm-5 4h5v2h-5zm-1.506.667A3 3 0 0 0 12 13H9v-3a3 3 0 1 0 2.494 4.667"
        />
        <path fill={color} d="M22 6H2v15h9v2h2v-2h9zM4 19V8h16v11z" />
      </svg>
    );
  },
);

export default ProSlideshowLine;
