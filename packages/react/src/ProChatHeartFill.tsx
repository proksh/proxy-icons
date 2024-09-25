import * as React from "react";
import { IconProps } from "./types";

export const ProChatHeartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm10 5.432-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034l3.365 3.338 3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
      </svg>
    );
  },
);

export default ProChatHeartFill;
