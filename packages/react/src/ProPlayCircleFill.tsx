import * as React from "react";
import { IconProps } from "./types";

export const ProPlayCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m7.5-3v6l.757.429 5-3v-.858l-5-3z"
        />
      </svg>
    );
  },
);

export default ProPlayCircleFill;
