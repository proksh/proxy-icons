import * as React from "react";
import { IconProps } from "./types";

export const ProListSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 7h18V5H3zm0 12h7v-2H3zm7-6H3v-2h7z" />
        <path
          fill={color}
          d="M16.33 9.5v1.626a4 4 0 0 0-1.854 1.072l-1.409-.814-1 1.732 1.408.813a4 4 0 0 0 0 2.142l-1.408.813 1 1.732 1.409-.814a4 4 0 0 0 1.854 1.072V20.5h2v-1.626a4 4 0 0 0 1.854-1.072l1.41.814 1-1.732-1.409-.813a4 4 0 0 0 0-2.142l1.408-.813-1-1.732-1.409.813a4 4 0 0 0-1.854-1.071V9.5zm1 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProListSettingsLine;