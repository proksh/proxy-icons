import * as React from "react";
import { IconProps } from "./types";

export const ProSparklingLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.726 2-.14.65a2.52 2.52 0 0 1-1.935 1.936l-.651.14v.548l.65.14a2.52 2.52 0 0 1 1.936 1.935l.14.651h.548l.14-.65a2.52 2.52 0 0 1 1.935-1.936l.651-.14v-.548l-.65-.14a2.52 2.52 0 0 1-1.936-1.935L17.274 2zm.909 12-.187.868a3.36 3.36 0 0 1-2.58 2.58l-.868.187v.73l.868.187a3.36 3.36 0 0 1 2.58 2.58l.187.868h.73l.187-.868a3.36 3.36 0 0 1 2.58-2.58l.868-.187v-.73l-.868-.187a3.36 3.36 0 0 1-2.58-2.58L18.365 14zM9 5H7c0 3.13-2.83 6-6 6v2c3.17 0 6 2.87 6 6h2c0-3.13 2.83-6 6-6v-2c-3.13 0-6-2.83-6-6m-4.244 7A8.8 8.8 0 0 0 8 8.756 8.8 8.8 0 0 0 11.244 12 8.8 8.8 0 0 0 8 15.244 8.8 8.8 0 0 0 4.756 12"
        />
      </svg>
    );
  },
);

export default ProSparklingLine;
