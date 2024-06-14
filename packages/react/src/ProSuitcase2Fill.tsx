import * as React from "react";
import { IconProps } from "./types";

export const ProSuitcase2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3v2H4L3 6v15l1 1h2v1h2v-1h8v1h2v-1h2l1-1V6l-1-1h-4V3l-1-1H9zm6 1v1h-4V4zM8 18V9h2v9zm6 0V9h2v9z"
        />
      </svg>
    );
  },
);

export default ProSuitcase2Fill;
