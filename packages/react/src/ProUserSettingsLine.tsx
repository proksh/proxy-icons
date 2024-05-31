import * as React from "react";
import { IconProps } from "./types";

export const ProUserSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m1 9a3 3 0 0 0-3 3v3H1v-3a5 5 0 0 1 5-5h4v2zm9.268 3a2 2 0 1 0 3.464-2 2 2 0 0 0-3.464 2M19 21.464a4 4 0 1 1-4-6.928 4 4 0 0 1 4 6.928"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="m19.098 15.634 2.165-1.25 1 1.732-2.165 1.25zm-4.196 4.732-2.165 1.25-1-1.732 2.165-1.25zm5.196-1.732 2.165 1.25-1 1.732-2.165-1.25zm-6.196-1.268-2.165-1.25 1-1.732 2.165 1.25zM16 15v-2.5h2V15zm2 6v2.5h-2V21z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserSettingsLine;
