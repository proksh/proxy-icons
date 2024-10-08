import * as React from "react";
import { IconProps } from "./types";

export const ProToolsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.203 5.324a3.5 3.5 0 0 0 4.963 4.255l11.127 11.128 1.414-1.414L9.58 8.165a3.5 3.5 0 0 0-4.256-4.963l2.283 2.283a1.5 1.5 0 0 1-2.121 2.12z"
        />
        <path
          fill={color}
          d="m15.228 7.186.353-1.767 3.536-2.122 1.414 1.414-2.121 3.536-1.768.353-2.606 2.607-1.415-1.414zM3.207 19.207l6.586-6.586 1.414 1.414-6.586 6.586z"
        />
      </svg>
    );
  },
);

export default ProToolsLine;
