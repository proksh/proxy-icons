import * as React from "react";
import { IconProps } from "./types";

export const ProInboxArchiveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.618 3 22 7.764V21H2V7.764L4.382 3zm-15 4h14.764l-1-2H5.618zm8.882 3h-3v4H8l4 4 4-4h-2.5z"
        />
      </svg>
    );
  },
);

export default ProInboxArchiveFill;
