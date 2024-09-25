import * as React from "react";
import { IconProps } from "./types";

export const ProSave2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4v16l1 1h16l1-1V7.5l-.293-.707-3.5-3.5L16.5 3H4zm3 2h8v3H6zm8.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        />
      </svg>
    );
  },
);

export default ProSave2Fill;
