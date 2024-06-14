import * as React from "react";
import { IconProps } from "./types";

export const ProFootprintFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.93 4.27a3.288 3.288 0 0 0-6.006-.526l-.567 1.042a5 5 0 0 0-.489 3.477l.754 3.382 5.42.762 1.212-2.993a5.53 5.53 0 0 0 .116-3.833zM7.414 6a3.29 3.29 0 0 0-2.941 1.818l-.619 1.237a5.53 5.53 0 0 0-.418 3.812L4.219 16h5.474l1.216-3.244a5 5 0 0 0 0-3.512l-.416-1.11A3.29 3.29 0 0 0 7.413 6M4 18h5.5v1.25a2.75 2.75 0 1 1-5.5 0zm10.535-4.347 5.446.765-.174 1.238a2.75 2.75 0 0 1-5.446-.765z"
        />
      </svg>
    );
  },
);

export default ProFootprintFill;
