import * as React from "react";
import { IconProps } from "./types";

export const ProAlignBottomFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 12H8V3H6v9H4l-.707 1.707 3 3h1.414l3-3zm11 9.5H3v-3h18zm-4.707-4.793-3-3L14 12h2V3h2v9h2l.707 1.707-3 3z"
        />
      </svg>
    );
  },
);

export default ProAlignBottomFill;
