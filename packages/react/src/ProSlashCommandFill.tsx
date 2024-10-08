import * as React from "react";
import { IconProps } from "./types";

export const ProSlashCommandFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 6A3.5 3.5 0 0 1 7 2.5h2v3H7a.5.5 0 0 0-.5.5v4c0 .744-.232 1.433-.627 2 .395.567.627 1.256.627 2v4a.5.5 0 0 0 .5.5h2v3H7A3.5 3.5 0 0 1 3.5 18v-4a.5.5 0 0 0-.5-.5H2v-3h1a.5.5 0 0 0 .5-.5z"
        />
        <path fill={color} d="M12.085 7h3.163l-3.334 10H8.752z" />
        <path
          fill={color}
          d="M20.5 6A3.5 3.5 0 0 0 17 2.5h-2v3h2a.5.5 0 0 1 .5.5v4c0 .744.232 1.433.627 2a3.5 3.5 0 0 0-.627 2v4a.5.5 0 0 1-.5.5h-2v3h2a3.5 3.5 0 0 0 3.5-3.5v-4a.5.5 0 0 1 .5-.5h1v-3h-1a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );
  },
);

export default ProSlashCommandFill;
