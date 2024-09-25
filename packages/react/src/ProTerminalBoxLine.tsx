import * as React from "react";
import { IconProps } from "./types";

export const ProTerminalBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.586 12 5.793 9.207l1.414-1.414L11.414 12l-4.207 4.207-1.414-1.414zM12 17h6v-2h-6z"
        />
        <path fill={color} d="M2 3h20v18H2zm2 2v14h16V5z" />
      </svg>
    );
  },
);

export default ProTerminalBoxLine;
