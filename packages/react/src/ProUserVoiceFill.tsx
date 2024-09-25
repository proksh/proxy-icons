import * as React from "react";
import { IconProps } from "./types";

export const ProUserVoiceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.297 2.784A13 13 0 0 1 21.258 13.5l-1.732-1a11 11 0 0 0 .523-9.974l1.827-.814a13 13 0 0 1 .421 1.072M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7M1 19a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3H1zM18.988 7.471a9 9 0 0 0-.766-4.132l-1.827.814a7 7 0 0 1-.333 6.347l1.732 1a9 9 0 0 0 1.194-4.029"
        />
      </svg>
    );
  },
);

export default ProUserVoiceFill;
