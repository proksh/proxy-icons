import * as React from "react";
import { IconProps } from "./types";

export const ProNewspaperFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 8v2h2V8z" />
        <path
          fill={color}
          d="M18 2H2v19l1 1h16a3 3 0 0 0 3-3v-7h-4zm2 17a1 1 0 1 1-2 0v-5h2zM5 7l1-1h4l1 1v4l-1 1H6l-1-1zm0 6v2h10v-2zm0 3v2h10v-2z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProNewspaperFill;
