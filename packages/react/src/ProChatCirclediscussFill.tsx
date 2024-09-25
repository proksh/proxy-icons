import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclediscussFill = React.forwardRef<
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
        d="M4 13.5C4 7.701 8.701 3 14.5 3V1C7.596 1 2 6.596 2 13.5z"
      />
      <path
        fill={color}
        d="M14.5 5a8.5 8.5 0 0 1 6.597 13.86l1.567 1.393L22 22h-7.5a8.5 8.5 0 0 1 0-17"
      />
    </svg>
  );
});

export default ProChatCirclediscussFill;
