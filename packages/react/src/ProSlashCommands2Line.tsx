import * as React from "react";
import { IconProps } from "./types";

export const ProSlashCommands2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m7.926 17 5.833-10h2.316L10.24 17z" />
        <path fill={color} d="M21 3H3v18h18zM5 19V5h14v14z" />
      </svg>
    );
  },
);

export default ProSlashCommands2Line;
