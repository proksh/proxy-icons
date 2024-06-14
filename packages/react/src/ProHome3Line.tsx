import * as React from "react";
import { IconProps } from "./types";

export const ProHome3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path fill={color} d="M16 17v-2H8v2z" />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586zM6 19V9.436l6-5.571 6 5.571V19z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586zM6 19V9.436l6-5.571 6 5.571V19z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586zM6 19V9.436l6-5.571 6 5.571V19z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586zM6 19V9.436l6-5.571 6 5.571V19z"
        />
      </svg>
    );
  },
);

export default ProHome3Line;
