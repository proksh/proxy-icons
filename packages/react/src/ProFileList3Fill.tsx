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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M2 2h16v13h4v4a3 3 0 0 1-3 3H3l-1-1zm17 18a1 1 0 0 0 1-1v-2h-2v2a1 1 0 0 0 1 1M6 7v2h8V7zm0 4v2h8v-2zm5 4H6v2h5z"
        />
      </svg>
    );
  },
);

export default ProFileList3Fill;
