import * as React from "react";
import { IconProps } from "./types";

export const ProFlashlightFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.25 8.7V.09L3.483 14.7h6.767v9.242L20.642 8.7z"
        />
      </svg>
    );
  },
);

export default ProFlashlightFill;
