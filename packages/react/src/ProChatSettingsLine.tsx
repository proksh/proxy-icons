import * as React from "react";
import { IconProps } from "./types";

export const ProChatSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.17 7.634.976.563A4 4 0 0 1 11 7.126V6h2v1.126a4 4 0 0 1 1.854 1.071l.976-.563 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.563A4 4 0 0 1 13 14.874V16h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564-1-1.732.975-.563a4 4 0 0 1 0-2.142l-.975-.563zM12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatSettingsLine;
