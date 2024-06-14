import * as React from "react";
import { IconProps } from "./types";

export const ProSlashCommands2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M3 3h18v18H3zm13.075 4h-2.316L7.926 17h2.315z" />
      </svg>
    );
  },
);

export default ProSlashCommands2Fill;
