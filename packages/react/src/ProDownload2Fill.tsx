import * as React from "react";
import { IconProps } from "./types";

export const ProDownload2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M5 8h6V2h2v6h6l.707 1.707-7 7h-1.414l-7-7z" />
        <path fill={color} d="M4 15.5v3.25h16V15.5h2v4.25l-1 1H3l-1-1V15.5z" />
      </svg>
    );
  },
);

export default ProDownload2Fill;
