import * as React from "react";
import { IconProps } from "./types";

export const ProSpeakerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
        <path
          fill={color}
          d="m4 2 1-1h14l1 1v20l-1 1H5l-1-1zm9.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-6 9.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"
        />
      </svg>
    );
  },
);

export default ProSpeakerFill;
