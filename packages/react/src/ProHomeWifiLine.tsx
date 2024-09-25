import * as React from "react";
import { IconProps } from "./types";

export const ProHomeWifiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.5 10.5a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5zm2.771 5.852c.151.364.229.754.229 1.148h-3v-3a3 3 0 0 1 2.771 1.852"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.414 11H20v10H4V11H1.585L4 8.586v-.022zM6 9.436V19h12V9.436l-6-5.571z"
        />
      </svg>
    );
  },
);

export default ProHomeWifiLine;
