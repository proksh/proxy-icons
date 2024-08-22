import * as React from "react";
import { IconProps } from "./types";

export const ProFileImageLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.5 11 4.5 6H7zm-5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
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

export default ProFileImageLine;
