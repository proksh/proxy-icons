import * as React from "react";
import { IconProps } from "./types";

export const ProFileTransferLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.586 11-1.793-1.793 1.414-1.414L16.414 12l-4.207 4.207-1.414-1.414L12.586 13H8v-2z"
        />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm12 2H5v16h14V8h-4z" />
      </svg>
    );
  },
);

export default ProFileTransferLine;
