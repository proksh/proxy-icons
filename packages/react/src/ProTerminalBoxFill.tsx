import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalBoxFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v18h20V3zm6.586 9L5.793 9.207l1.414-1.414L11.414 12l-4.207 4.207-1.414-1.414zM18 17h-6v-2h6z"
        />
      </svg>
    );
  },
);

export default ProTerminalBoxFill;
