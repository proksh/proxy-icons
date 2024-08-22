import * as React from "react";
import { IconProps } from "./types";

export const ProFileWord2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.836 1.014 16 2v20l-1.164.986L2 20.847V3.153zM5 8h2v5.297l2-2.334 2 2.334V8h2v8h-2.317L9 14.037 7.317 16H5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M17 3h4l1 1v16l-1 1h-4z" />
      </svg>
    );
  },
);

export default ProFileWord2Fill;
