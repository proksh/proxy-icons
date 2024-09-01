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
          d="M9 3V1H7v2H3v20h18V3h-4V1h-2v2zm8 8H7V9h10zm0 4H7v-2h10z"
        />
      </svg>
    );
  },
);

export default ProTodoFill;
