import * as React from "react";
import { IconProps } from "./types";

export const ProSkipForwardMiniLine = React.forwardRef<
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
        d="M16 7v10h2V7zm-8.504.132L6 8v8l1.496.868 7-4v-1.736zM8 14.277V9.723L11.984 12z"
      />
    </svg>
  );
});

export default ProSkipForwardMiniLine;
