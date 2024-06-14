import * as React from "react";
import { IconProps } from "./types";

export const ProChatCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm9 11.914 5.707-5.707-1.414-1.414L11 12.086 8.707 9.793l-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProChatCheckFill;
