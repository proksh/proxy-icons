import * as React from "react";
import { IconProps } from "./types";

export const ProTextSnippetFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v18H2zm15 4.5H7v3h2v-1h2v5H9.5v2h5v-2H13v-5h2v1h2z"
        />
      </svg>
    );
  },
);

export default ProTextSnippetFill;
