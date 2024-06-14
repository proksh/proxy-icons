import * as React from "react";
import { IconProps } from "./types";

export const ProChatSmileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm10 10a3 3 0 0 1-3-3H7a5 5 0 0 0 10 0h-2a3 3 0 0 1-3 3"
        />
      </svg>
    );
  },
);

export default ProChatSmileFill;
