import * as React from "react";
import { IconProps } from "./types";

export const ProCameraLensFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.382 4.503 3.19 5.523 4.594-7.959A10 10 0 0 0 12 2a9.96 9.96 0 0 0-6.618 2.503M3.964 6.047l4.6 7.968h-6.36A10 10 0 0 1 2 12c0-2.23.73-4.29 1.964-5.953m-1.125 9.968a10.03 10.03 0 0 0 6.013 5.48l3.164-5.48zm8.065 5.925q.54.06 1.096.06a9.96 9.96 0 0 0 6.628-2.512l-3.154-5.462zm9.14-3.998A9.96 9.96 0 0 0 22 12q-.001-1.01-.193-1.963H15.48zm1.14-9.905a10.03 10.03 0 0 0-5.974-5.51l-3.181 5.51zM9.726 12.026l1.148-1.99h2.297l1.148 1.99-1.148 1.989h-2.297z"
        />
      </svg>
    );
  },
);

export default ProCameraLensFill;
