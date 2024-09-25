import * as React from "react";
import { IconProps } from "./types";

export const ProChatFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22z" />
      </svg>
    );
  },
);

export default ProChatFill;
