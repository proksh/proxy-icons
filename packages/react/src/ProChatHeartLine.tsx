import * as React from "react";
import { IconProps } from "./types";

export const ProChatHeartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 8.432-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034l3.365 3.338 3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatHeartLine;
