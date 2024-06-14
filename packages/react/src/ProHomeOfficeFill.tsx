import * as React from "react";
import { IconProps } from "./types";

export const ProHomeOfficeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.135 8 7.429v.022l.415.414H12v8h-1v4H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022l.415.414H12v8h-1v4H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022l.415.414H12v8h-1v4H4V11H1.586L4 8.586v-.022z"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022l.415.414H12v8h-1v4H4V11H1.586L4 8.586v-.022z"
        />
        <path fill={color} d="M14 11h9v7h-9zm2 2v3h5v-3z" />
        <path fill={color} d="M14 11h9v7h-9zm2 2v3h5v-3z" />
        <path fill={color} d="M14 11h9v7h-9zm2 2v3h5v-3z" />
        <path fill={color} d="M14 11h9v7h-9zm2 2v3h5v-3zm8 6H13v2h11z" />
        <path fill={color} d="M24 19H13v2h11z" />
        <path fill={color} d="M24 19H13v2h11z" />
        <path fill={color} d="M24 19H13v2h11z" />
      </svg>
    );
  },
);

export default ProHomeOfficeFill;
