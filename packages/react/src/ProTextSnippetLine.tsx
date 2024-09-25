import * as React from "react";
import { IconProps } from "./types";

export const ProTextSnippetLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M17 7.5H7v3h2v-1h2v5H9.5v2h5v-2H13v-5h2v1h2z" />
        <path fill={color} d="M22 3H2v18h20zM4 19V5h16v14z" />
      </svg>
    );
  },
);

export default ProTextSnippetLine;
