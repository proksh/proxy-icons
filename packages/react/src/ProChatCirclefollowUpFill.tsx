import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclefollowUpFill = React.forwardRef<
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m15-3h-2v6h2zm-6 6v-2h2v-2h-2V9H9v2H7v2h2v2z"
      />
    </svg>
  );
});

export default ProChatCirclefollowUpFill;
