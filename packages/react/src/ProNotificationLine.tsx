import * as React from "react";
import { IconProps } from "./types";

export const ProNotificationLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a7 7 0 0 0-7 7v2.586l-2 2V19h5a4 4 0 0 0 8 0h5v-5.414l-2-2V9a7 7 0 0 0-7-7M7 9a5 5 0 0 1 10 0v3.414l2 2V17H5v-2.586l2-2zm7 10a2 2 0 1 1-4 0z"
        />
      </svg>
    );
  },
);

export default ProNotificationLine;
