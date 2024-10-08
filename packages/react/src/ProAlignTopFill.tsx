import * as React from "react";
import { IconProps } from "./types";

export const ProAlignTopFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 5.5H3v-3h18zm-.293 4.793-3-3h-1.414l-3 3L14 12h2v9h2v-9h2zm-13-3 3 3L10 12H8v9H6v-9H4l-.707-1.707 3-3z"
        />
      </svg>
    );
  },
);

export default ProAlignTopFill;
