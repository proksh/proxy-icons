import * as React from "react";
import { IconProps } from "./types";

export const ProFormatClearLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.657 4 2 2H12.2l-.56 2.985 1.714 1.713L14.236 6H20V4zm2.919 16 1.172-6.252L3 6l1.414-1.414 15 15L18 21l-5.538-5.538-.85 4.538z"
        />
      </svg>
    );
  },
);

export default ProFormatClearLine;
