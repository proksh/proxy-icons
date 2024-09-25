import * as React from "react";
import { IconProps } from "./types";

export const ProFileSettingsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.17 9.634.976.563A4 4 0 0 1 11 9.126V8h2v1.126c.715.184 1.353.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.563A4 4 0 0 1 13 16.874V18h-2v-1.126a4 4 0 0 1-1.854-1.071l-.976.563-1-1.732.975-.563a4 4 0 0 1 0-2.142l-.975-.563zM12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
        <path fill={color} d="M15.914 2H3v20h18V7.086zM15 8h4v12H5V4h10z" />
      </svg>
    );
  },
);

export default ProFileSettingsLine;
