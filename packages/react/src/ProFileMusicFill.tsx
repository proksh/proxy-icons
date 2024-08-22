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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm8 6.5h4v2h-2V15a2.5 2.5 0 1 1-2-2.45z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileMusicFill;
