import * as React from "react";
import { IconProps } from "./types";

export const ProChatNewFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm9 12h2v-3h3v-2h-3V7h-2v3H8v2h3z"
        />
      </svg>
    );
  },
);

export default ProChatNewFill;
