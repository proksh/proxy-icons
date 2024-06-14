import * as React from "react";
import { IconProps } from "./types";

export const ProChatVoiceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 7v8h2V7zm4 2v4h2V9zm-8 4V9h2v4z" />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatVoiceLine;
