import * as React from "react";
import { IconProps } from "./types";

export const ProHomeHeartLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 10.932-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034L12 17l3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
        />
        <path
          fill={color}
          d="m20 8.564-8-7.429-8 7.429v.022L1.586 11H4v10h16V11h2.415L20 8.586zM6 19V9.436l6-5.571 6 5.571V19z"
        />
      </svg>
    );
  },
);

export default ProHomeHeartLine;
