import * as React from "react";
import { IconProps } from "./types";

export const ProSurroundSoundFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
        <path
          fill={color}
          d="m2 4 1-1h18l1 1v16l-1 1H3l-1-1zm6.464 11.536A4.98 4.98 0 0 1 7 12c0-1.38.56-2.63 1.464-3.535L7.05 7.05A6.98 6.98 0 0 0 5 12c0 1.933.784 3.683 2.05 4.95zM17 12c0 1.38-.56 2.63-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 19 12a6.98 6.98 0 0 0-2.05-4.95l-1.414 1.415A4.98 4.98 0 0 1 17 12m-5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        />
      </svg>
    );
  },
);

export default ProSurroundSoundFill;
