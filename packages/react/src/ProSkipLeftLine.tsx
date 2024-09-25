import * as React from "react";
import { IconProps } from "./types";

export const ProSkipLeftLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 18V6h2v12zm4.086-6 6.207-6.207 1.414 1.414L12.914 12l4.793 4.793-1.414 1.414z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSkipLeftLine;
