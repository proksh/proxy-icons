import * as React from "react";
import { IconProps } from "./types";

export const ProFileAddFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm8 14v-3H8v-2h3V8h2v3h3v2h-3v3z"
        />
      </svg>
    );
  },
);

export default ProFileAddFill;
