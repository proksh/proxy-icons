import * as React from "react";
import { IconProps } from "./types";

export const ProFileCodeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.793 9.293 1.414 1.414L8.914 13l2.293 2.293-1.414 1.414L6.086 13zm2.5 1.414 1.414-1.414L17.414 13l-3.707 3.707-1.414-1.414L14.586 13z"
        />
        <path
          fill={color}
          d="M3 2h12.914L21 7.086V22H3zm12 2v4h4v12H5V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileCodeLine;
