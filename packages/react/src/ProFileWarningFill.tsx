import * as React from "react";
import { IconProps } from "./types";

export const ProFileWarningFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V7.086L15.914 2zm8 12V8h2v6zm0 3v-2h2v2z"
        />
      </svg>
    );
  },
);

export default ProFileWarningFill;
