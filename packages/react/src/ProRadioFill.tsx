import * as React from "react";
import { IconProps } from "./types";

export const ProRadioFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3h13l1 1v16l-1 1H3l-1-1V4l1-1h3V1h2zM5 6v4h9V8h2v2h3V6zm3 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        />
      </svg>
    );
  },
);

export default ProRadioFill;
