import * as React from "react";
import { IconProps } from "./types";

export const ProCodeBlockFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.293 2.293 1.414 1.414L3.414 6l2.293 2.293-1.414 1.414L.586 6zM15 3l-1 1v8H3l-1 1v7l1 1h18l1-1V4l-1-1z"
        />
        <path
          fill={color}
          d="m7.293 3.707 1.414-1.414L12.414 6 8.707 9.707 7.293 8.293 9.586 6z"
        />
      </svg>
    );
  },
);

export default ProCodeBlockFill;
