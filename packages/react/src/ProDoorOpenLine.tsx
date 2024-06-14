import * as React from "react";
import { IconProps } from "./types";

export const ProDoorOpenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10 11v2h2v-2z" />
        <path
          fill={color}
          d="M19 4v15h2v2H3v-2h2V4l.757-.97 8-2L15 2v1h3zM7 19h6V3.28l-6 1.5zm10 0V5h-2v14z"
        />
      </svg>
    );
  },
);

export default ProDoorOpenLine;
