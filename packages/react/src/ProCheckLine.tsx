import * as React from "react";
import { IconProps } from "./types";

export const ProCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.957 7.957 9.5 18.414l-5.707-5.707 1.414-1.414L9.5 15.586l9.043-9.043z"
        />
      </svg>
    );
  },
);

export default ProCheckLine;
