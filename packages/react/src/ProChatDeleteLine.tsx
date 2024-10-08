import * as React from "react";
import { IconProps } from "./types";

export const ProChatDeleteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.586 11 8.11 8.525l1.415-1.414L12 9.585l2.475-2.474 1.414 1.414L13.414 11l2.476 2.475-1.415 1.414L12 12.414l-2.475 2.475-1.414-1.414z"
        />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm2 2v12h6.48L12 18.9l1.52-1.9H20V5z"
        />
      </svg>
    );
  },
);

export default ProChatDeleteLine;
