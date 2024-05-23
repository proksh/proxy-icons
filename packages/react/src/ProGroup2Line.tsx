import * as React from "react";
import { IconProps } from "./types";

export const ProGroup2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.5 10.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-7.75 1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
        />
        <path
          fill={color}
          d="m12.258 21.997-.242.003H12q-.194 0-.387-.007C6.27 21.79 2 17.393 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.437-4.338 9.86-9.742 9.997M12 4a8 8 0 0 0-7.594 10.524A4.98 4.98 0 0 1 8 13h3c.711 0 1.388.148 2 .416A5 5 0 0 1 15 13h1c1.411 0 2.685.585 3.594 1.524A8 8 0 0 0 12 4m0 16q.418 0 .825-.042a8 8 0 0 0 5.781-3.445A3 3 0 0 0 16 15h-1a3 3 0 0 0-3 3zm-2-.252a8 8 0 0 1-4.606-3.235A3 3 0 0 1 8 15h3c-.628.836-1 1.874-1 3z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProGroup2Line;