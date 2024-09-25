import * as React from "react";
import { IconProps } from "./types";

export const ProFileVideoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm6.5 7.5.757-.429 5 3v.858l-5 3L9.5 15.5z"
        />
      </svg>
    );
  },
);

export default ProFileVideoFill;
