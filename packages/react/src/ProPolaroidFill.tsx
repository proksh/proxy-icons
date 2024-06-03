import * as React from "react";
import { IconProps } from "./types";

export const ProPolaroidFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v4.392a7 7 0 1 0 0 7.215V20l-1 1H4l-1-1zm2 4h2V5H5z"
        />
        <path
          fill={color}
          d="M15 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M12.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        />
      </svg>
    );
  },
);

export default ProPolaroidFill;
