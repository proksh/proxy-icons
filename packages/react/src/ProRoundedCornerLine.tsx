import * as React from "react";
import { IconProps } from "./types";

export const ProRoundedCornerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 3H3v2h2zm4 0H7v2h2zm2 0v2h5a3 3 0 0 1 3 3v5h2V8a5 5 0 0 0-5-5zM3 7v2h2V7zm0 4v2h2v-2zm0 4v2h2v-2zm18 2v-2h-2v2zM5 19H3v2h2zm2 2h2v-2H7zm8-2v2h2v-2zm4 0v2h2v-2zm-8 2h2v-2h-2z"
        />
      </svg>
    );
  },
);

export default ProRoundedCornerLine;
