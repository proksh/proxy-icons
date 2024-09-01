import * as React from "react";
import { IconProps } from "./types";

export const ProFolderKeyholeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm8.5 7v3h.5v3h2v-3h.5v-3z"
        />
      </svg>
    );
  },
);

export default ProFolderKeyholeFill;
