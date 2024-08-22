import * as React from "react";
import { IconProps } from "./types";

export const ProFileCopy2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h12l1 1v14l-1 1h-3v3l-1 1H4l-1-1V7l1-1h3zm12 13h-2V7l-1-1H9V4h10zm-6-3H7v-2h6zm0 4H7v-2h6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileCopy2Fill;
