import * as React from "react";
import { IconProps } from "./types";

export const ProScreenshot2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v1h2V3zm5 0H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm3 0h-1v2h2V4zM3 7v2h2V7zm18 2V7h-2v2zM3 11v2h2v-2zm18 10H7V11h3.5L12 9h4l1.5 2H21zm-5-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M3 15v2h2v-2zm0 4v1l1 1h1v-2z"
        />
      </svg>
    );
  },
);

export default ProScreenshot2Fill;
