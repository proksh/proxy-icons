import * as React from "react";
import { IconProps } from "./types";

export const ProFolderReceivedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h8.414l2 2H22v8h-2V7h-8.414l-2-2H4v14h9v2H2z"
        />
        <path
          fill={color}
          d="m18.414 17.5 1.793-1.793-1.414-1.414-4.207 4.207 4.207 4.207 1.414-1.414-1.793-1.793H23v-2z"
        />
      </svg>
    );
  },
);

export default ProFolderReceivedLine;
