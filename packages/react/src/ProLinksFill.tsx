import * as React from "react";
import { IconProps } from "./types";

export const ProLinksFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.132 3.868a6.5 6.5 0 0 0-9.193 0L9.525 5.282a6.5 6.5 0 0 0 2.12 10.608l.001-.001a2.5 2.5 0 0 0 .429-2.965l-.195-.357a3.49 3.49 0 0 1-1.174-3.454 3.5 3.5 0 0 1 .94-1.71l1.415-1.413a3.5 3.5 0 1 1 4.95 4.95l-.966.965a7.54 7.54 0 0 1 .19 3.681 6.5 6.5 0 0 0 1.482-1.111l1.415-1.414a6.5 6.5 0 0 0 0-9.193"
        />
        <path
          fill={color}
          d="M12.354 16.596q.18-.18.328-.378a3.5 3.5 0 0 0 .686-2.373 3.52 3.52 0 0 0-1.12-2.3l-.117-.153a2.5 2.5 0 0 1 .223-3.281V8.11a6.5 6.5 0 0 1 2.12 1.415 6.48 6.48 0 0 1 1.895 4.245 6.47 6.47 0 0 1-1.894 4.948l-1.414 1.414a6.5 6.5 0 0 1-9.193-9.193l1.414-1.414c.45-.45.95-.82 1.483-1.111a7.54 7.54 0 0 0 .19 3.68l-.965.967a3.5 3.5 0 0 0 4.95 4.95z"
        />
      </svg>
    );
  },
);

export default ProLinksFill;
