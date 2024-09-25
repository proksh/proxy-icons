import * as React from "react";
import { IconProps } from "./types";

export const ProFileDownloadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.261 12h2.752l-4.012 4-3.991-4h2.751V7.992h2.5z"
        />
        <path fill={color} d="M15.914 2H3v20h18V7.086zM15 8h4v12H5V4h10z" />
      </svg>
    );
  },
);

export default ProFileDownloadLine;
