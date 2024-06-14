import * as React from "react";
import { IconProps } from "./types";

export const ProSend2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.065 3.356 4.49 2.128l16 9v1.744l-16 9-1.425-1.228L5.977 13H14v-2H5.977z"
        />
      </svg>
    );
  },
);

export default ProSend2Fill;
