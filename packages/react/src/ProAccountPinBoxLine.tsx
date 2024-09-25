import * as React from "react";
import { IconProps } from "./types";

export const ProAccountPinBoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M12 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M10 14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4z"
        />
        <path
          fill={color}
          d="m3 4 1-1h16l1 1v16l-1 1h-5.586L12 23.414 9.586 21H4l-1-1zm2 1v14h5l.707.293L12 20.586l1.293-1.293L14 19h5V5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProAccountPinBoxLine;
