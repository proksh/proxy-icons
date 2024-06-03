import * as React from "react";
import { IconProps } from "./types";

export const ProForwardEndFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 13.766V19h2V5h-2v5.234l-8.485-5.091L11 6v4.234L2.515 5.143 1 6v12l1.515.858L11 13.766V18l1.515.858z"
        />
      </svg>
    );
  },
);

export default ProForwardEndFill;
