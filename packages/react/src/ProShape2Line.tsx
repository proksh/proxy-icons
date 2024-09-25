import * as React from "react";
import { IconProps } from "./types";

export const ProShape2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2 2 3v4l1 1h1v8H3l-1 1v4l1 1h4l1-1v-1h8v1l1 1h4l1-1v-4l-1-1h-1V8h1l1-1V3l-1-1h-4l-1 1v1H8V3L7 2zm3 14V8h1l1-1V6h8v1l1 1h1v8h-1l-1 1v1H8v-1l-1-1zM4 6V4h2v2zm0 14v-2h2v2zm14-2v2h2v-2zm0-12V4h2v2z"
        />
      </svg>
    );
  },
);

export default ProShape2Line;
