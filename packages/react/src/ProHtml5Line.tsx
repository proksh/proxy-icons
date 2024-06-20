import * as React from "react";
import { IconProps } from "./types";

export const ProHtml5Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.899 10h8.21l-.609 7-4.5 1-4.5-1-.348-4H9.16l.205 2.366L12 15.95l2.635-.585.292-3.366H7.065L6.5 5.5h11l-.174 2H8.681z"
        />
        <path
          fill={color}
          d="M3 2h18l-1.5 18-7.5 2-7.5-2zm2.174 2 1.202 14.43L12 19.93l5.624-1.5L18.826 4z"
        />
      </svg>
    );
  },
);

export default ProHtml5Line;
