import * as React from "react";
import { IconProps } from "./types";

export const ProUserFollowFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M8 14a5 5 0 0 0-5 5v3h11.722l-2.695-3.465 3.946-3.07 1.762 2.265 2.025-2.026A5 5 0 0 0 16 14z"
        />
        <path
          fill={color}
          d="m17.433 22.981 5.274-5.274-1.414-1.414-3.726 3.726-1.799-2.16-1.536 1.281z"
        />
      </svg>
    );
  },
);

export default ProUserFollowFill;
