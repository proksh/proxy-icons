import * as React from "react";
import { IconProps } from "./types";

export const ProCarouselViewLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 4 4 3H1v2h2v14H1v2h3l1-1zm2 0 1-1h8l1 1v16l-1 1H8l-1-1zm2 1v14h6V5zm11-2-1 1v16l1 1h3v-2h-2V5h2V3z"
        />
      </svg>
    );
  },
);

export default ProCarouselViewLine;
