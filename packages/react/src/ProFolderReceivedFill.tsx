import * as React from "react";
import { IconProps } from "./types";

export const ProFolderReceivedFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v9.5l-2.768-2.768-6.768 6.768 2.5 2.5H2z"
        />
        <path
          fill={color}
          d="m18.414 17.5 1.793-1.793-1.414-1.414-4.207 4.207 4.207 4.207 1.414-1.414-1.793-1.793H23v-2z"
        />
      </svg>
    );
  },
);

export default ProFolderReceivedFill;
