import * as React from "react";
import { IconProps } from "./types";

export const ProForwardEndLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m21 13.766-8.485 5.092L11 18v-4.234l-8.485 5.092L1 18V6l1.515-.857L11 10.233V6l1.515-.857L21 10.233V5h2v14h-2zM3 16.234 10.056 12 3 7.766zm10 0L20.056 12 13 7.766z"
        />
      </svg>
    );
  },
);

export default ProForwardEndLine;
