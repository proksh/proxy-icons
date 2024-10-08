import * as React from "react";
import { IconProps } from "./types";

export const ProYoutubeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.93 4h6.14c1.355 0 2.471 0 3.355.119.928.124 1.747.396 2.403 1.053.657.656.928 1.475 1.053 2.403.12.884.119 2 .119 3.354v2.141c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354v-2.142c0-1.354 0-2.47.119-3.354.124-.928.396-1.747 1.053-2.403.656-.657 1.475-.929 2.403-1.053.884-.12 2-.119 3.354-.119M16 12l-6-3.5v7z"
        />
      </svg>
    );
  },
);

export default ProYoutubeFill;
