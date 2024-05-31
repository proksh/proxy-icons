import * as React from "react";
import { IconProps } from "./types";

export const ProUserForbidLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12.876 14H8a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3h3.813c.237-.732.6-1.407 1.063-2"
        />
        <path
          fill={color}
          d="m14.465 20.121 5.656-5.656 1.415 1.414-5.657 5.657z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserForbidLine;
