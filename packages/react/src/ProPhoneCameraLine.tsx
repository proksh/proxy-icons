import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneCameraLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 9.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 5.5v2h2v-2z"
        />
        <path fill={color} d="M1 4h22v15H1zm2 2v11h18V6z" />
      </svg>
    );
  },
);

export default ProPhoneCameraLine;
