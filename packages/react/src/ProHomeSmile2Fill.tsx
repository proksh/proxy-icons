import * as React from "react";
import { IconProps } from "./types";

export const ProHomeSmile2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.75 9 6.75V21H3V8.5zM12 15a3 3 0 0 1-3-3H7a5 5 0 0 0 10 0h-2a3 3 0 0 1-3 3"
        />
      </svg>
    );
  },
);

export default ProHomeSmile2Fill;
