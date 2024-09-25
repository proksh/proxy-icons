import * as React from "react";
import { IconProps } from "./types";

export const ProRunFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.074 5.644a2 2 0 1 0 .831-3.912 2 2 0 0 0-.832 3.912m-2.704 3.1-1.687.407-.131 3.738-1.999-.07.184-5.256 5.14-1.241a2 2 0 0 1 2.608 1.476c.532 1.604 1.315 2.31 2.037 2.682.625.322 1.21.42 1.834.526.229.039.463.078.707.13l-.416 1.956a10 10 0 0 0-.424-.075c-.66-.11-1.683-.278-2.616-.76a5.4 5.4 0 0 1-1.624-1.273l-.684 3.22 1.989 2.174V23h-2v-5.845l-2.16-2.36-1.003 4.72-6.813-1.832.519-1.931 4.776 1.284z"
        />
      </svg>
    );
  },
);

export default ProRunFill;
