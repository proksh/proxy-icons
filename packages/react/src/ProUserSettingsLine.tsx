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
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M6 16a3 3 0 0 0-3 3v3H1v-3a5 5 0 0 1 5-5h4v2z" />
        <path
          fill={color}
          d="m12.067 16.116 1.408.813a4 4 0 0 0 0 2.142l-1.408.813 1 1.732 1.409-.814a4 4 0 0 0 1.854 1.072V23.5h2v-1.626a4 4 0 0 0 1.854-1.072l1.41.814 1-1.732-1.409-.813a4 4 0 0 0 0-2.142l1.408-.813-1-1.732-1.409.813a4 4 0 0 0-1.854-1.071V12.5h-2v1.626a4 4 0 0 0-1.854 1.072l-1.409-.814zM17.33 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProUserSettingsLine;
