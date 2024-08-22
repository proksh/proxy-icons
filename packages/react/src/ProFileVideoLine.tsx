import * as React from "react";
import { IconProps } from "./types";

export const ProFileVideoLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.257 9.071 9.5 9.5v6l.757.429 5-3v-.858z" />
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

export default ProFileVideoLine;
