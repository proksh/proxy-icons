import * as React from "react";
import { IconProps } from "./types";

export const ProEarthquakeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022L22.415 11H20v10h-6.5l1.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.5 3.5L9 21H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10h-6.5l1.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.5 3.5L9 21H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10h-6.5l1.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.5 3.5L9 21H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10h-6.5l1.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.5 3.5L9 21H4V11H1.586L4 8.586v-.022z"
        />
      </svg>
    );
  },
);

export default ProEarthquakeFill;
