import * as React from "react";
import { IconProps } from "./types";

export const ProRocketLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path
          fill={color}
          d="m12 1.456.287.086A8.02 8.02 0 0 1 18 9.22v5.366l2 2V19H4v-2.414l2-2V9.22c0-3.54 2.322-6.66 5.713-7.678zm0 2.096A6.02 6.02 0 0 0 8 9.22v6.194L6.414 17h11.172L16 15.414V9.22a6.02 6.02 0 0 0-4-5.668m-1 17.166V20H9v1c0 .376.176.658.277.796a2.5 2.5 0 0 0 .377.402c.247.216.55.421.816.587a14 14 0 0 0 1.054.595l.476.238.476-.238a11 11 0 0 0 .313-.165 14 14 0 0 0 .741-.43c.266-.166.569-.37.816-.587.122-.107.261-.243.377-.402.1-.138.277-.42.277-.796v-1h-2v.718a5 5 0 0 1-.53.372c-.162.1-.325.196-.47.276-.145-.08-.308-.175-.47-.276a5 5 0 0 1-.53-.372"
        />
      </svg>
    );
  },
);

export default ProRocketLine;
