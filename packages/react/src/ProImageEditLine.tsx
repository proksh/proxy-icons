import * as React from "react";
import { IconProps } from "./types";

export const ProImageEditLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v1.422l-2 2V5H4v10.086l6-6 3.668 3.668-1.312 1.312-.011.193L10 11.914l-6 6V19h13.086l-.59-.59 1.414-1.414L19.914 19H20v-4.093l2-2V21H2z"
        />
        <path
          fill={color}
          d="m22 7.25 1.414 1.414-7.778 7.778h-1.414l.087-1.5zM14 8.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
        />
      </svg>
    );
  },
);

export default ProImageEditLine;
