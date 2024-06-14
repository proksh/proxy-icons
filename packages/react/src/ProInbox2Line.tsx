import * as React from "react";
import { IconProps } from "./types";

export const ProInbox2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.024 3.783v-.002L4.198 3h15.604l.173.778.001.005 2 9v.003l.024.104V21H2v-8.11zM4 19h16v-5h-3.416a5.001 5.001 0 0 1-9.168 0H4zm.247-7H9a3 3 0 1 0 6 0h4.753l-1.555-7H5.802z"
        />
      </svg>
    );
  },
);

export default ProInbox2Line;
