import * as React from "react";
import { IconProps } from "./types";

export const ProBriefcase2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 1h8l1 1v3h4l1 1v14l-1 1H3l-1-1V6l1-1h4V2zm7 4V3H9v2zM4 7v4h3V9h2v2h6V9h2v2h3V7zm0 6v6h16v-6z"
        />
      </svg>
    );
  },
);

export default ProBriefcase2Line;
