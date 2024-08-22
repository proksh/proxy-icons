import * as React from "react";
import { IconProps } from "./types";

export const ProFileList3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 2h16v13h4v4a3 3 0 0 1-3 3H3l-1-1zm17 18a1 1 0 0 0 1-1v-2h-2v2a1 1 0 0 0 1 1M6 7h8v2H6zm0 4h8v2H6zm5 4H6v2h5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileList3Fill;
