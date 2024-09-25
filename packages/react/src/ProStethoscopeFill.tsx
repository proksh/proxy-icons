import * as React from "react";
import { IconProps } from "./types";

export const ProStethoscopeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6V5H6v4a4 4 0 0 0 8 0V5h-1v1h-2V2h2v1h2l1 1v5a6 6 0 0 1-5 5.917V16.5a3.5 3.5 0 0 0 6.774 1.239 3 3 0 1 1 2.05.146A5.5 5.5 0 0 1 9 16.5v-1.583A6 6 0 0 1 4 9V4l1-1h2V2h2v4z"
        />
      </svg>
    );
  },
);

export default ProStethoscopeFill;
