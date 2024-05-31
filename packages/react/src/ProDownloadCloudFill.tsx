import * as React from "react";
import { IconProps } from "./types";

export const ProDownloadCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.327 7.002A7.001 7.001 0 0 0 4.046 9.194 5.502 5.502 0 0 0 5.5 20H18a6 6 0 0 0 5.995-6.245Q24 13.627 24 13.5a6.5 6.5 0 0 0-6.673-6.498m-4.078 6.002H16L11.99 17 8 13.004h2.75V9h2.5z"
        />
      </svg>
    );
  },
);

export default ProDownloadCloudFill;
