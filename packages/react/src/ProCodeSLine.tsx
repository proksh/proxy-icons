import * as React from "react";
import { IconProps } from "./types";

export const ProCodeSLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.707 7.707 6.293 6.293.586 12l5.707 5.707 1.414-1.414L3.414 12zm8.586 0 1.414-1.414L23.414 12l-5.707 5.707-1.414-1.414L20.586 12z"
        />
      </svg>
    );
  },
);

export default ProCodeSLine;
