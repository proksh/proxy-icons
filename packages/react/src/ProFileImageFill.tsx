import * as React from "react";
import { IconProps } from "./types";

export const ProFileImageFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm7 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5.5 4.5 6H7z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileImageFill;
