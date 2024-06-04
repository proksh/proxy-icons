import * as React from "react";
import { IconProps } from "./types";

export const ProNetflixLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.985 17.208 16.001 2h2v20a7.6 7.6 0 0 0-2.02-.5L8 6.302V21.5a7.3 7.3 0 0 0-2 .5V2h2z"
        />
      </svg>
    );
  },
);

export default ProNetflixLine;
