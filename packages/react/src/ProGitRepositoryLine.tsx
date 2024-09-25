import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 5v2h2V5zm0 5V8h2v2z" />
        <path
          fill={color}
          d="M6 2h15v19h-8v2.5l-3-2-3 2V21H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 17h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035Q6.245 14 6.5 14z"
        />
      </svg>
    );
  },
);

export default ProGitRepositoryLine;
