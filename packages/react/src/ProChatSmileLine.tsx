import * as React from "react";
import { IconProps } from "./types";

export const ProChatSmileLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 13a3 3 0 0 1-3-3H7a5 5 0 0 0 10 0h-2a3 3 0 0 1-3 3"
        />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatSmileLine;
