import * as React from "react";
import { IconProps } from "./types";

export const ProSuitcase2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 18V9h2v9zm6-9v9h2V9z" />
        <path
          fill={color}
          d="M9 2 8 3v2H4L3 6v15l1 1h2v1h2v-1h8v1h2v-1h2l1-1V6l-1-1h-4V3l-1-1zm5 3h-4V4h4zM5 20V7h14v13z"
        />
      </svg>
    );
  },
);

export default ProSuitcase2Line;
