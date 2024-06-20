import * as React from "react";
import { IconProps } from "./types";

export const ProBug2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.707 2.293 7.293 3.707l1.221 1.221A7.03 7.03 0 0 0 5.674 8H3v2h2.07A7 7 0 0 0 5 11v1H3v2h2v1q0 .51.07 1H3v2h2.674a7 7 0 0 0 12.652 0H21v-2h-2.07q.07-.49.07-1v-1h2v-2h-2v-1q0-.51-.07-1H21V8h-2.674a7.03 7.03 0 0 0-2.84-3.072l1.221-1.22-1.414-1.415-1.855 1.855a7 7 0 0 0-2.876 0zM15 12H9v-2h6zm0 4H9v-2h6z"
        />
      </svg>
    );
  },
);

export default ProBug2Fill;
