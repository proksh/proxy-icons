import * as React from "react";
import { IconProps } from "./types";

export const ProBusWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-.066-6.5c1.147 0 2.184.465 2.935 1.216l-1.06 1.06A2.64 2.64 0 0 0 18.434 5c-.731 0-1.394.297-1.873.776L15.5 4.716A4.14 4.14 0 0 1 18.435 3.5m0 2.261c.522 0 .994.212 1.336.553L18.435 7.65l-1.336-1.336a1.88 1.88 0 0 1 1.336-.553M6 15h4v2H6zm12 0h-4v2h4z"
        />
        <path
          fill={color}
          d="M19.5 20v2h-3v-2h-9v2h-3v-2H4l-1-1v-7H2V8h1V4l1-1h9.6a5.5 5.5 0 0 0-.578 2H5v7h14v-1.022a5.5 5.5 0 0 0 2-.578V19l-1 1zM5 14v4h14v-4z"
        />
      </svg>
    );
  },
);

export default ProBusWifiLine;
