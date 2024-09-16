import * as React from "react";
import { IconProps } from "./types";

export const ProFolderSettingsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        <path
          fill={color}
          d="M2 3v18h20V5h-9.586l-2-2zm6.17 6.634.976.563A4 4 0 0 1 11 9.126V8h2v1.126c.715.184 1.353.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.563A4 4 0 0 1 13 16.874V18h-2v-1.126a4 4 0 0 1-1.854-1.071l-.976.563-1-1.732.975-.563a4 4 0 0 1 0-2.142l-.975-.563z"
        />
      </svg>
    );
  },
);

export default ProFolderSettingsFill;