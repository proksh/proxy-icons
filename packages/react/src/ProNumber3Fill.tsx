import * as React from "react";
import { IconProps } from "./types";

export const ProNumber3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.676 4.5H6.5v-3h13.824l-7.012 7.946C16.439 9.978 19 12.684 19 16.18A6.82 6.82 0 0 1 12.179 23H11.5A6.5 6.5 0 0 1 5 16.5h3a3.5 3.5 0 0 0 3.5 3.5h.679A3.82 3.82 0 0 0 16 16.179c0-2.668-2.665-4.515-5.163-3.578l-.81.303-1.652-2.396z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProNumber3Fill;
