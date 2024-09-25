import * as React from "react";
import { IconProps } from "./types";

export const ProEthLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.149 15.304 12 20.6l3.851-5.296L12 17.674zm8.988-3.14L12 3.816l-5.137 8.348L12 15.326zM4 13l8-13 8 13-8 11z"
        />
      </svg>
    );
  },
);

export default ProEthLine;
