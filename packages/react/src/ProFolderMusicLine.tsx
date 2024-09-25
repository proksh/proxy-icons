import * as React from "react";
import { IconProps } from "./types";

export const ProFolderMusicLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 12.55V8.5h4v2h-2V15a2.5 2.5 0 1 1-2-2.45m-.5 1.95a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
        />
        <path
          fill={color}
          d="M2 3h8.414l2 2H22v16H2zm2 2v14h16V7h-8.414l-2-2z"
        />
      </svg>
    );
  },
);

export default ProFolderMusicLine;
