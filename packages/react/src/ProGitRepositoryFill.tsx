import * as React from "react";
import { IconProps } from "./types";

export const ProGitRepositoryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h1v2.5l3-2 3 2V21h8V2zm7 17v-2H7v2h-.5a1.5 1.5 0 0 1 0-3H19v3zM7 7V5h2v2zm0 3V8h2v2z"
        />
      </svg>
    );
  },
);

export default ProGitRepositoryFill;
