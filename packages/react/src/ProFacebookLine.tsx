import * as React from "react";
import { IconProps } from "./types";

export const ProFacebookLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2q.784 0 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298a1.63 1.63 0 0 0-.691.692c-.22.411-.298.814-.298 2.138z"
        />
      </svg>
    );
  },
);

export default ProFacebookLine;
