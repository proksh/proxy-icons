import * as React from "react";
import { IconProps } from "./types";

export const ProMailSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v10h-2V7.227l-8 7.111-8-7.111V19h10v2H2zm2.505 2L12 11.662 19.495 5z"
        />
        <path
          fill={color}
          d="m16.036 17.866 1.014.585a3 3 0 0 0 0 1.098l-1.014.585 1 1.732 1.015-.586c.277.238.598.425.949.55V23h2v-1.17c.351-.125.672-.312.95-.55l1.014.586 1-1.732-1.014-.586a3 3 0 0 0 0-1.096l1.014-.586-1-1.732-1.014.586a3 3 0 0 0-.95-.55V15h-2v1.17a3 3 0 0 0-.95.55l-1.014-.586zM20 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
      </svg>
    );
  },
);

export default ProMailSettingsLine;
