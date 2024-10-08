import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionLaughFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m4-3 5-.008C10.76 7.855 9.733 7 8.5 7S6.237 7.859 6 9m7 0 5-.008C17.76 7.855 16.733 7 15.5 7s-2.264.859-2.5 2m-1 8a5 5 0 0 0 5-5v-.004A13 13 0 0 0 12 11c-1.772 0-3.46.354-5 .996V12a5 5 0 0 0 5 5"
        />
      </svg>
    );
  },
);

export default ProEmotionLaughFill;
