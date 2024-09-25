import * as React from "react";
import { IconProps } from "./types";

export const ProBox1Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5 1.134h-1l-8.66 5-.5.866v10l.5.866 8.66 5h1l8.66-5 .5-.866V7l-.5-.866zm-7.253 5.92L12 3.154l7.66 4.423v8.846L13 20.268v-8.853zM4.34 8.838 11 12.585v7.683l-6.66-3.845z"
        />
      </svg>
    );
  },
);

export default ProBox1Line;
