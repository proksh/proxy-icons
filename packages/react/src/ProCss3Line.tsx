import * as React from "react";
import { IconProps } from "./types";

export const ProCss3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 18 .8-4h2.04l-.545 2.724 5.744 2.155 7.228-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15-9 3z"
        />
      </svg>
    );
  },
);

export default ProCss3Line;
