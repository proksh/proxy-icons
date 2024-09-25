import * as React from "react";
import { IconProps } from "./types";

export const ProAddBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h16l1 1v16l-1 1H4l-1-1zm8 13h2v-4h4v-2h-4V7h-2v4H7v2h4z"
        />
      </svg>
    );
  },
);

export default ProAddBoxFill;
