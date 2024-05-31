import * as React from "react";
import { IconProps } from "./types";

export const ProNurseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.701 1c-2.403 0-4.61.849-6.335 2.263l-.557.456 2.702 7.091a4.5 4.5 0 0 0 8.98-.018l2.294-6.882-.5-.438A9.97 9.97 0 0 0 11.7 1m.3 12a2.5 2.5 0 0 1-2.45-2h4.9A2.5 2.5 0 0 1 12 13m-1-4.75V7H9.75V5H11V3.75h2V5h1.25v2H13v1.25zm1 8.836-1.628-1.628L4 16.095V22h16v-5.905l-6.372-.637z"
        />
      </svg>
    );
  },
);

export default ProNurseFill;
