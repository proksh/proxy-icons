import * as React from "react";
import { IconProps } from "./types";

export const ProFileUploadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 11.414-1.793 1.793-1.414-1.414L12 7.586l4.207 4.207-1.414 1.414L13 11.414V16h-2z"
        />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm12 2H5v16h14V8h-4z" />
      </svg>
    );
  },
);

export default ProFileUploadLine;
