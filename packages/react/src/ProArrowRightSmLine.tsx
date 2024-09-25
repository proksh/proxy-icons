import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.086 11-4.293-4.293 1.414-1.414L18.914 12l-6.707 6.707-1.414-1.414L15.086 13H5.5v-2z"
        />
      </svg>
    );
  },
);

export default ProArrowRightSmLine;
