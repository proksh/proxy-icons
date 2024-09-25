import * as React from "react";
import { IconProps } from "./types";

export const ProSimCard2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.207 2.293 14.5 2H5L4 3v18l1 1h14l1-1V7.5l-.293-.707zM11 12H8v-2h4l1 1v7h-2zm3-2h2v2h-2zm0 3h2v2h-2zm0 5v-2h2v2zm-6-2h2v2H8zm0-1v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProSimCard2Fill;
