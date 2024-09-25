import * as React from "react";
import { IconProps } from "./types";

export const ProUserSearchLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M1 19a5 5 0 0 1 5-5h7.225a5.5 5.5 0 0 0-1.35 2H6a3 3 0 0 0-3 3v3H1z"
        />
        <path
          fill={color}
          d="M13 18a4 4 0 1 1 7.446 2.032l1.761 1.76-1.414 1.415-1.761-1.76A4 4 0 0 1 13 18m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserSearchLine;
