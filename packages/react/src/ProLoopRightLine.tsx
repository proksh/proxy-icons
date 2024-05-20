import * as React from "react";
import { IconProps } from "./types";

export const ProLoopRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.616 7.5A7.99 7.99 0 0 0 12 4c-1.042 0-2.038.2-2.95.562a8.03 8.03 0 0 0-4.421 4.324A8 8 0 0 0 4 12H2a10 10 0 0 1 .446-2.963 10.02 10.02 0 0 1 7.539-6.834C10.635 2.07 11.31 2 12 2a9.98 9.98 0 0 1 8 4V3.5h2v6h-6v-2zM12 20a8 8 0 0 0 8-8h2c0 5.523-4.477 10-10 10a9.95 9.95 0 0 1-5.648-1.747A10 10 0 0 1 4 18.001V20.5H2v-6h6v2H5.384q.204.297.431.575A7.99 7.99 0 0 0 12 20"
        />
      </svg>
    );
  },
);

export default ProLoopRightLine;
