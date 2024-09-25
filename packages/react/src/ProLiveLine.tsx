import * as React from "react";
import { IconProps } from "./types";

export const ProLiveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7.257 8.571 6.5 9v6l.757.429 5-3v-.858z" />
        <path
          fill={color}
          d="M17 4v5.131l6-4V18.87l-6-4V20H1V4zm0 7.535v.93l4 2.667V8.868zM15 6H3v12h12z"
        />
      </svg>
    );
  },
);

export default ProLiveLine;
