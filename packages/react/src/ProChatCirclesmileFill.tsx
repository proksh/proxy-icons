import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclesmileFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m10 3a3 3 0 0 1-3-3H7a5 5 0 0 0 10 0h-2a3 3 0 0 1-3 3"
      />
    </svg>
  );
});

export default ProChatCirclesmileFill;
