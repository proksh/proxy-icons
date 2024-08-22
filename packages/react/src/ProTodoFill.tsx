import * as React from "react";
import { IconProps } from "./types";

export const ProTodoFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 3h6V1h2v2h4v20H3V3h4V1h2zm8 8H7V9h10zm0 4H7v-2h10z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProTodoFill;
