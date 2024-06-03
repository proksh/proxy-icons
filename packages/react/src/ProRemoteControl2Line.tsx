import * as React from "react";
import { IconProps } from "./types";

export const ProRemoteControl2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 17v-2h2v2zm4-2v2h2v-2zm-2-7V6h2v2h2v2h-2v2h-2v-2H9V8z"
        />
        <path fill={color} d="m5 3 1-1h12l1 1v18l-1 1H6l-1-1zm2 1v16h10V4z" />
      </svg>
    );
  },
);

export default ProRemoteControl2Line;
