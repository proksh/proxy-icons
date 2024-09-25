import * as React from "react";
import { IconProps } from "./types";

export const ProSave3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4v16l1 1h16l1-1V7.5l-.293-.707-3.5-3.5L16.5 3H4zm16 15h-2v-5l-1-1H8l-1 1v5H5V5h2v4h9V5h.086L19 7.914zm-4 0H9v-4h6z"
        />
      </svg>
    );
  },
);

export default ProSave3Line;
