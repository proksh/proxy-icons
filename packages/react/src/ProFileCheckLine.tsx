import * as React from "react";
import { IconProps } from "./types";

export const ProFileCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M15.914 2H3v20h9.5v-2H5V4h10v4h4v6.5h2V7.086z" />
        <path
          fill={color}
          d="m18 22.914 5.207-5.207-1.414-1.414L18 20.086l-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProFileCheckLine;
