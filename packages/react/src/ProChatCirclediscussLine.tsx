import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclediscussLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M14.5 3C8.701 3 4 7.701 4 13.5H2C2 6.596 7.596 1 14.5 1z"
      />
      <path
        fill={color}
        d="M14.5 5a8.5 8.5 0 0 1 6.597 13.86l1.567 1.393L22 22h-7.5a8.5 8.5 0 0 1 0-17m6.5 8.5a6.5 6.5 0 1 0-6.5 6.5h4.87l-.362-.322-.025-1.471A6.48 6.48 0 0 0 21 13.5"
      />
    </svg>
  );
});

export default ProChatCirclediscussLine;
