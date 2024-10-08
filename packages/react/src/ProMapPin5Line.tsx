import * as React from "react";
import { IconProps } from "./types";

export const ProMapPin5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 21.333c.327-.289.657-.574.978-.87a42 42 0 0 0 3.278-3.377c.896-1.037 1.814-2.221 2.513-3.415C19.454 12.503 20 11.206 20 9.974 20 5.567 16.415 2 12 2S4 5.567 4 9.974c0 1.232.546 2.528 1.23 3.697.7 1.194 1.618 2.378 2.513 3.415a43 43 0 0 0 3.279 3.377c.32.296.65.581.978.87M6 9.974C6 6.678 8.683 4 12 4s6 2.678 6 5.974c0 .694-.329 1.614-.957 2.687-.613 1.047-1.445 2.128-2.3 3.117A41 41 0 0 1 12 18.639a42 42 0 0 1-2.743-2.861c-.855-.989-1.687-2.07-2.3-3.117C6.329 11.588 6 10.668 6 9.974M19 24v-2H5v2z"
        />
      </svg>
    );
  },
);

export default ProMapPin5Line;
