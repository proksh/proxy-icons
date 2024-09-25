import * as React from "react";
import { IconProps } from "./types";

export const ProFileGifLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 11.5A1.5 1.5 0 0 1 8.5 10H11v1H8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H10v-1H9v-1h2v3H8.5A1.5 1.5 0 0 1 7 13.5zm5-1.5v5h1v-5zm2 0h3v1h-2v1h2v1h-2v2h-1z"
        />
        <path fill={color} d="M3 2v20h18V7.086L15.914 2zm2 2h10v4h4v12H5z" />
      </svg>
    );
  },
);

export default ProFileGifLine;
