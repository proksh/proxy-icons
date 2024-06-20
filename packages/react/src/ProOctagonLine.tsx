import * as React from "react";
import { IconProps } from "./types";

export const ProOctagonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.142 2.685h7.717l5.456 5.457v7.716l-5.456 5.457H8.142l-5.456-5.457V8.142zM4.686 8.97v6.06l4.285 4.285h6.06l4.284-4.285V8.97L15.03 4.685H8.97z"
        />
      </svg>
    );
  },
);

export default ProOctagonLine;
