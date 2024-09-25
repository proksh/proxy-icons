import * as React from "react";
import { IconProps } from "./types";

export const ProUploadCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.327 7.002A7.001 7.001 0 0 0 4.046 9.194 5.502 5.502 0 0 0 5.5 20H18a6 6 0 0 0 5.995-6.245Q24 13.627 24 13.5a6.5 6.5 0 0 0-6.673-6.498M8 12l4-4 4 4h-2.75v4h-2.5v-4z"
        />
      </svg>
    );
  },
);

export default ProUploadCloudFill;
