import * as React from "react";
import { IconProps } from "./types";

export const ProGitCommitFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a4 4 0 0 0-3.874 3H3v2h5.126a4.002 4.002 0 0 0 7.748 0H21v-2h-5.126A4 4 0 0 0 12 8"
        />
        <path
          fill={color}
          d="M12 8a4 4 0 0 0-3.874 3H3v2h5.126a4.002 4.002 0 0 0 7.748 0H21v-2h-5.126A4 4 0 0 0 12 8"
        />
        <path
          fill={color}
          d="M12 8a4 4 0 0 0-3.874 3H3v2h5.126a4.002 4.002 0 0 0 7.748 0H21v-2h-5.126A4 4 0 0 0 12 8"
        />
      </svg>
    );
  },
);

export default ProGitCommitFill;
