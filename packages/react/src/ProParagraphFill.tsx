import * as React from "react";
import { IconProps } from "./types";

export const ProParagraphFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 3.5a6.5 6.5 0 0 0-.5 12.981V21h3V6.5h2V21h3V6.5H20v-3zM6.5 10a3.5 3.5 0 0 1 3-3.465v6.93A3.5 3.5 0 0 1 6.5 10"
        />
      </svg>
    );
  },
);

export default ProParagraphFill;
