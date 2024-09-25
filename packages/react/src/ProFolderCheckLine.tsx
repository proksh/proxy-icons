import * as React from "react";
import { IconProps } from "./types";

export const ProFolderCheckLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.914 3H1.5v18h11v-2h-9V5h5.586l2 2H19.5v6h2V5h-9.586z"
        />
        <path
          fill={color}
          d="m18.5 21.914 5.207-5.207-1.414-1.414-3.793 3.793-2.293-2.293-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProFolderCheckLine;
