import * as React from "react";
import { IconProps } from "./types";

export const ProChatSettingsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm6.17 4.634-1 1.732.975.563a4 4 0 0 0 0 2.142l-.975.563 1 1.732.976-.563c.502.51 1.14.887 1.854 1.071V16h2v-1.126a4 4 0 0 0 1.854-1.072l.976.564 1-1.732-.975-.563a4 4 0 0 0 0-2.142l.975-.563-1-1.732-.976.563A4 4 0 0 0 13 7.127V6h-2v1.126a4 4 0 0 0-1.854 1.071z"
        />
      </svg>
    );
  },
);

export default ProChatSettingsFill;
