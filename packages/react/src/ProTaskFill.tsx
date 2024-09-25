import * as React from "react";
import { IconProps } from "./types";

export const ProTaskFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 3 1-1h16l1 1v18l-1 1H4l-1-1zm8 12.914 5.707-5.707-1.414-1.414L11 13.086l-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProTaskFill;
