import * as React from "react";
import { IconProps } from "./types";

export const ProCentosFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 13.06 4.47 4.471L12 22l-4.47-4.47zm-8 3.06L7.879 20H4zm16 0V20h-3.88zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12zM12 2l4.469 4.469L12 10.939 7.53 6.47zM7.879 4l-3.88 3.879L4 4zM20 4v3.879l-3.88-3.88z"
        />
      </svg>
    );
  },
);

export default ProCentosFill;
