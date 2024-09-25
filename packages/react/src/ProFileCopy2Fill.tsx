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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M7 3v3H4L3 7v14l1 1h12l1-1v-3h3l1-1V3l-1-1H8zm12 13h-2V7l-1-1H9V4h10zm-6-3H7v-2h6zm0 4H7v-2h6z"
        />
      </svg>
    );
  },
);

export default ProFileCopy2Fill;
