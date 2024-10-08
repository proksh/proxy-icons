import * as React from "react";
import { IconProps } from "./types";

export const ProFootprintLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.93 4.27a3.288 3.288 0 0 0-6.006-.526l-.567 1.042a5 5 0 0 0-.489 3.477l.754 3.382 5.42.762 1.212-2.993a5.53 5.53 0 0 0 .116-3.833zm-2.938-.23a1.29 1.29 0 0 1 1.042.866l.44 1.311a3.53 3.53 0 0 1-.074 2.446l-.626 1.546-2.501-.351-.452-2.03a3 3 0 0 1 .293-2.086L16.68 4.7a1.29 1.29 0 0 1 1.31-.66M7.414 6a3.29 3.29 0 0 0-2.941 1.818l-.619 1.237a5.53 5.53 0 0 0-.418 3.812L4.219 16h5.474l1.216-3.244a5 5 0 0 0 0-3.512l-.416-1.11A3.29 3.29 0 0 0 7.413 6M6.262 8.712a1.288 1.288 0 0 1 2.358.124l.417 1.11a3 3 0 0 1 0 2.107L8.307 14H5.78l-.404-1.618a3.53 3.53 0 0 1 .267-2.433zM9.5 18H4v1.25a2.75 2.75 0 1 0 5.5 0zm5.035-4.347 5.446.765-.174 1.238a2.75 2.75 0 0 1-5.446-.765z"
        />
      </svg>
    );
  },
);

export default ProFootprintLine;
