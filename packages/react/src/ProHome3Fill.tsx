import * as React from "react";
import { IconProps } from "./types";

export const ProHome3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM16 15H8v2h8z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM16 15H8v2h8z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM16 15H8v2h8z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM16 15H8v2h8z"
        />
      </svg>
    );
  },
);

export default ProHome3Fill;
