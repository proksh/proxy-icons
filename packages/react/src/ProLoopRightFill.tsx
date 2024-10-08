import * as React from "react";
import { IconProps } from "./types";

export const ProLoopRightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4c1.976 0 3.785.716 5.181 1.904l-1.888 1.889L16 9.5h5l1-1v-5l-1.707-.707-1.694 1.694A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8m0 16a8 8 0 0 0 8-8h2c0 5.523-4.477 10-10 10-2.53 0-4.839-.94-6.6-2.487l-1.693 1.694L2 20.5v-5l1-1h5l.707 1.707-1.889 1.889A7.97 7.97 0 0 0 12 20"
        />
      </svg>
    );
  },
);

export default ProLoopRightFill;
