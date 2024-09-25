import * as React from "react";
import { IconProps } from "./types";

export const ProFileImageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm7 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5.5 4.5 6H7z"
        />
      </svg>
    );
  },
);

export default ProFileImageFill;
