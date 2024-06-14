import * as React from "react";
import { IconProps } from "./types";

export const ProHome7Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM12 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        />
      </svg>
    );
  },
);

export default ProHome7Fill;
