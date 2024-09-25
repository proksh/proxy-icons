import * as React from "react";
import { IconProps } from "./types";

export const ProHomeSmileFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2 2 0 0 1-2-2H8a4 4 0 0 0 8 0h-2a2 2 0 0 1-2 2"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2 2 0 0 1-2-2H8a4 4 0 0 0 8 0h-2a2 2 0 0 1-2 2"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2 2 0 0 1-2-2H8a4 4 0 0 0 8 0h-2a2 2 0 0 1-2 2"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2 2 0 0 1-2-2H8a4 4 0 0 0 8 0h-2a2 2 0 0 1-2 2"
        />
      </svg>
    );
  },
);

export default ProHomeSmileFill;
