import * as React from "react";
import { IconProps } from "./types";

export const ProSurroundSoundLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4.536 3.536A4.98 4.98 0 0 0 17 12c0-1.38-.56-2.63-1.464-3.536L16.95 7.05A6.98 6.98 0 0 1 19 12a6.98 6.98 0 0 1-2.05 4.95zM7 12c0 1.38.56 2.63 1.464 3.536L7.05 16.95A6.98 6.98 0 0 1 5 12c0-1.933.784-3.683 2.05-4.95l1.414 1.415A4.98 4.98 0 0 0 7 12"
        />
        <path fill={color} d="M3 3 2 4v16l1 1h18l1-1V4l-1-1zm1 16V5h16v14z" />
      </svg>
    );
  },
);

export default ProSurroundSoundLine;
