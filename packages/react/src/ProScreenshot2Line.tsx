import * as React from "react";
import { IconProps } from "./types";

export const ProScreenshot2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h1v2H3zm4-1h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h1l1 1v1h-2zM3 9V7h2v2zm18-2v2h-2V7zM3 13v-2h2v2zm11 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path
          fill={color}
          d="M21 11h-3.5L16 9h-4l-1.5 2H7v10h14zm-4.5 2H19v6H9v-6h2.5l1.5-2h2zM3 17v-2h2v2zm0 3v-1h2v2H4z"
        />
      </svg>
    );
  },
);

export default ProScreenshot2Line;
