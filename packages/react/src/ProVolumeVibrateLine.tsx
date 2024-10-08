import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeVibrateLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 21.08V2.92L6.65 8H2v8h4.65zM7.35 10 11 7.08v9.84L7.35 14H4v-4zm11.943-6.707-3 3v1.414L18.086 9.5l-1.793 1.793v1.414l1.793 1.793-1.793 1.793v1.414l3 3 1.414-1.414L18.414 17l1.793-1.793v-1.414L18.414 12l1.793-1.793V8.793L18.414 7l2.293-2.293z"
        />
      </svg>
    );
  },
);

export default ProVolumeVibrateLine;
