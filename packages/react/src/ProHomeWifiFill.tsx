import * as React from "react";
import { IconProps } from "./types";

export const ProHomeWifiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM7.5 10.5v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m3 7a3 3 0 0 0-3-3v3z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM7.5 10.5v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m3 7a3 3 0 0 0-3-3v3z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM7.5 10.5v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m3 7a3 3 0 0 0-3-3v3z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM7.5 10.5v2a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7m3 7a3 3 0 0 0-3-3v3z"
        />
      </svg>
    );
  },
);

export default ProHomeWifiFill;
