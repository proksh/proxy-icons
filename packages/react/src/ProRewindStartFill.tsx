import * as React from "react";
import { IconProps } from "./types";

export const ProRewindStartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 13.766V19H1V5h2v5.234l8.486-5.091L13 6v4.234l8.485-5.091L23 6v12l-1.515.858L13 13.766V18l-1.514.858z"
        />
      </svg>
    );
  },
);

export default ProRewindStartFill;
