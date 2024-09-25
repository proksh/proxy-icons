import * as React from "react";
import { IconProps } from "./types";

export const ProCarouselViewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4 3 1 1v16l-1 1H1V3zm3 1 1-1h8l1 1v16l-1 1H8l-1-1zm13-1-1 1v16l1 1h3V3z"
        />
      </svg>
    );
  },
);

export default ProCarouselViewFill;
