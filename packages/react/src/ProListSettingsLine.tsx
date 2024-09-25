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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M3 7h18V5H3zm0 12h7v-2H3zm7-6H3v-2h7zm2.067.116 1.408.813a4 4 0 0 0 0 2.142l-1.408.813 1 1.732 1.409-.814a4 4 0 0 0 1.854 1.072V20.5h2v-1.626a4 4 0 0 0 1.854-1.072l1.41.814 1-1.732-1.409-.813a4 4 0 0 0 0-2.142l1.408-.813-1-1.732-1.409.813a4 4 0 0 0-1.854-1.071V9.5h-2v1.626a4 4 0 0 0-1.854 1.072l-1.409-.814zM17.33 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        />
      </svg>
    );
  },
);

export default ProListSettingsLine;
