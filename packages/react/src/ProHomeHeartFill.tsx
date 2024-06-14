import * as React from "react";
import { IconProps } from "./types";

export const ProHomeHeartFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zm0 9.797-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034L11.999 17l3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zm0 9.797-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034L11.999 17l3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zm0 9.797-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034L11.999 17l3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zm0 9.797-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034L11.999 17l3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
      </svg>
    );
  },
);

export default ProHomeHeartFill;
