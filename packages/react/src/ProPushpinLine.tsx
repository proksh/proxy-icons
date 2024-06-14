import * as React from "react";
import { IconProps } from "./types";

export const ProPushpinLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.182 1.833 8.486 8.485-1.415 1.414-.707-.707-4.408 4.409-.991 3.633-1.672.444-3.536-3.536-4.95 4.95-1.414-1.415 4.95-4.95-3.535-3.535.39-1.656L9.4 8.03l4.075-4.075-.707-.707zm.707 3.535-4.243 4.243-.39.242-2.708.902 6.123 6.123.607-2.227.258-.444 4.596-4.596z"
        />
      </svg>
    );
  },
);

export default ProPushpinLine;
