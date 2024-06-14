import * as React from "react";
import { IconProps } from "./types";

export const ProSlideshowViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 11V5h16v9zm0 2h4v3H4zm10 3h-4v-3h4zm2 0v-3h4v3z"
        />
      </svg>
    );
  },
);

export default ProSlideshowViewLine;
