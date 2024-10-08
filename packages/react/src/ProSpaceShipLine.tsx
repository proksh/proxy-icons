import * as React from "react";
import { IconProps } from "./types";

export const ProSpaceShipLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8.38a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        />
        <path
          fill={color}
          d="m20.958 16.093.3 1.004-.319.08c-.406.102-.812.205-1.221.295a41 41 0 0 1-5.204.796L12 23.798l-2.513-5.53a41 41 0 0 1-5.205-.796c-.409-.09-.815-.193-1.221-.295l-.32-.08.301-1.004C4.576 10.98 6.628 7.38 8.314 5.045a23 23 0 0 1 2.14-2.58C10.937 1.968 11.46 1.533 12 1.1c.54.433 1.063.868 1.546 1.365a23 23 0 0 1 2.14 2.58c1.686 2.335 3.738 5.935 5.272 11.048M6.02 15.781c1.101.202 2.6.43 4.2.537l.596.04L12 18.964l1.185-2.606.596-.04a38 38 0 0 0 4.939-.679c-1.421-4.34-3.204-7.413-4.656-9.423A21 21 0 0 0 12 3.746l-.11.112a21 21 0 0 0-1.954 2.358C8.484 8.226 6.7 11.3 5.28 15.64q.328.067.739.143"
        />
      </svg>
    );
  },
);

export default ProSpaceShipLine;
