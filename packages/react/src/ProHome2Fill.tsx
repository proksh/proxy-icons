import * as React from "react";
import { IconProps } from "./types";

export const ProHome2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586z"
        />
      </svg>
    );
  },
);

export default ProHome2Fill;
