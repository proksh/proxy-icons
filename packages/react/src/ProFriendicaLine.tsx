import * as React from "react";
import { IconProps } from "./types";

export const ProFriendicaLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 4v5h-6v2h6v6h-6v3h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-2 0H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v-5h6v-2H8V7h6zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
        />
      </svg>
    );
  },
);

export default ProFriendicaLine;
