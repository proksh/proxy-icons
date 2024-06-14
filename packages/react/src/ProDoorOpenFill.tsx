import * as React from "react";
import { IconProps } from "./types";

export const ProDoorOpenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.758 1.03-8 2L5 4v15H3v2h18v-2h-2V4l-1-1h-3V2zM17 19h-2V5h2zm-7-8h2v2h-2z"
        />
      </svg>
    );
  },
);

export default ProDoorOpenFill;
