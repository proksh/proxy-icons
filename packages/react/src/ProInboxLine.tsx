import * as React from "react";
import { IconProps } from "./types";

export const ProInboxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3v18H2V3zm-2 9V5H4v7h4.901l.193.75a3.002 3.002 0 0 0 5.812 0l.193-.75zM4 14v5h16v-5h-3.416a5 5 0 0 1-9.168 0z"
        />
      </svg>
    );
  },
);

export default ProInboxLine;
