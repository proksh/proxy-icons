import * as React from "react";
import { IconProps } from "./types";

export const ProChatForwardFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm10 6.738H7.992v2.5H12v2.752l4-3.992-4-4.011z"
        />
      </svg>
    );
  },
);

export default ProChatForwardFill;
