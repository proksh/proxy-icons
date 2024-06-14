import * as React from "react";
import { IconProps } from "./types";

export const ProInboxUnarchiveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.618 3H4.382L2 7.764V21h20V7.764zm-15 4 1-2h12.764l1 2zm8.882 7v4h-3v-4H8l4-4 4 4z"
        />
      </svg>
    );
  },
);

export default ProInboxUnarchiveFill;
