import * as React from "react";
import { IconProps } from "./types";

export const ProShiningLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5.65A11 11 0 0 1 5.65 12 11 11 0 0 1 12 18.35 11 11 0 0 1 18.35 12 11 11 0 0 1 12 5.65m-1.477-2.036.5-2.324h1.955l.499 2.324a9 9 0 0 0 6.91 6.91l2.323.498v1.956l-2.323.499a9 9 0 0 0-6.91 6.91l-.5 2.323h-1.955l-.499-2.323a9 9 0 0 0-6.91-6.91l-2.323-.5v-1.955l2.324-.499a9 9 0 0 0 6.91-6.91"
        />
      </svg>
    );
  },
);

export default ProShiningLine;
