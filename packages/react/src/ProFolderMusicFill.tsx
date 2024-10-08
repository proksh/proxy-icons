import * as React from "react";
import { IconProps } from "./types";

export const ProFolderMusicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v16H2zm9 5.5v4.05A2.5 2.5 0 1 0 13 15v-4.5h2v-2z"
        />
      </svg>
    );
  },
);

export default ProFolderMusicFill;
