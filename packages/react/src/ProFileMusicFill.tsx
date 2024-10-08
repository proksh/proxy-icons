import * as React from "react";
import { IconProps } from "./types";

export const ProFileMusicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm8 6.5h4v2h-2V15a2.5 2.5 0 1 1-2-2.45z"
        />
      </svg>
    );
  },
);

export default ProFileMusicFill;
