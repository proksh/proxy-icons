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
          d="M3.32 16.236A5 5 0 0 1 8 13h3c.877 0 1.704.227 2.423.626l-.97 1.748A3 3 0 0 0 11 15H8c-1.283 0-2.38.806-2.808 1.942z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M17.5 10.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 9.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
        />
        <path
          fill={color}
          d="M10 18a5 5 0 0 1 5-5h1a5 5 0 0 1 4.68 3.236l-.076.863a10 10 0 0 1-9.714 4.84l-.89-.994zm5-3a3 3 0 0 0-3 3v2a7.99 7.99 0 0 0 6.607-3.487A3 3 0 0 0 16 15z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProGroup2Line;
