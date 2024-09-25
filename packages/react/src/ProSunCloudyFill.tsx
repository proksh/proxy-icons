import * as React from "react";
import { IconProps } from "./types";

export const ProSunCloudyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.501 1.368v2.218h2V1.368zm-2.895 5.507a4.696 4.696 0 0 1 8.406 3.934 6 6 0 0 1 2.984 5.423q.004.11.004.223A5.545 5.545 0 0 1 17.454 22H8.819a7.818 7.818 0 1 1 2.788-15.125m1.776.958a7.9 7.9 0 0 1 2.154 2.347 6 6 0 0 1 2.593-.074q.068-.293.068-.606a2.696 2.696 0 0 0-4.815-1.667m8.032.667h2.218v2h-2.218z"
        />
        <path
          fill={color}
          d="m9.042 4.457 1.568 1.568 1.414-1.414-1.568-1.568zm9.933.155 1.568-1.569 1.414 1.415-1.568 1.568z"
        />
      </svg>
    );
  },
);

export default ProSunCloudyFill;
