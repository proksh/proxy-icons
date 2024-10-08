import * as React from "react";
import { IconProps } from "./types";

export const ProFileMusicLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 15a2.5 2.5 0 0 1 3-2.45V8.5h4v2h-2V15a2.5 2.5 0 0 1-5 0"
        />
        <path fill={color} d="M15.914 2H3v20h18V7.086zM15 8h4v12H5V4h10z" />
      </svg>
    );
  },
);

export default ProFileMusicLine;
