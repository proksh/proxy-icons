import * as React from "react";
import { IconProps } from "./types";

export const ProChatCircleheartFill = React.forwardRef<
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m10-2.568-.306-.304a2.177 2.177 0 0 0-3.06 0 2.133 2.133 0 0 0 0 3.034l3.365 3.338 3.367-3.338a2.133 2.133 0 0 0 0-3.034 2.177 2.177 0 0 0-3.06 0z"
      />
    </svg>
  );
});

export default ProChatCircleheartFill;
