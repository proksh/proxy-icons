import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2v3H3L2 6v14l1 1h18l1-1V6l-1-1h-4V2l-1-1H8zm8 1v2H9V3zm0 4v6h-2v-1h-2v1H9V7zm-4 8v1h2v-1h2v4H9v-4zM4 7h3v6H4zm0 8h3v4H4zm13 4v-4h3v4zm0-12h3v6h-3z"
        />
      </svg>
    );
  },
);

export default ProBriefcase5Line;
