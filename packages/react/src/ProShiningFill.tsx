import * as React from "react";
import { IconProps } from "./types";

export const ProShiningFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.022 1.29-.499 2.324a9 9 0 0 1-6.91 6.91l-2.323.498v1.956l2.324.499a9 9 0 0 1 6.91 6.91l.498 2.323h1.956l.499-2.323a9 9 0 0 1 6.91-6.91l2.323-.5v-1.955l-2.323-.499a9 9 0 0 1-6.91-6.91l-.5-2.323z"
        />
      </svg>
    );
  },
);

export default ProShiningFill;
