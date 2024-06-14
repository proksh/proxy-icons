import * as React from "react";
import { IconProps } from "./types";

export const ProSteering2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-6 9H4.062a8.001 8.001 0 0 1 15.876 0H18l-1-1H7zm-1.938 2H6.17A3 3 0 0 0 9 15h2v4.938A8.004 8.004 0 0 1 4.062 13M13 19.938V15h2a3 3 0 0 0 2.83-2h2.108A8.004 8.004 0 0 1 13 19.938M15 13H9a1 1 0 0 1-1-1h8a1 1 0 0 1-1 1"
        />
      </svg>
    );
  },
);

export default ProSteering2Line;
