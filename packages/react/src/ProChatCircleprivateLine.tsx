import * as React from "react";
import { IconProps } from "./types";

export const ProChatCircleprivateLine = React.forwardRef<
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
        d="M16 11v5H8v-5h1v-1a3 3 0 1 1 6 0v1zm-2 2h-4v1h4zm-1-2v-1a1 1 0 1 0-2 0v1z"
      />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m10-8a8 8 0 0 0-6.882 12.083l.102.785-.764 2.676 2.676-.765.786.102A8 8 0 1 0 12 4"
      />
    </svg>
  );
});

export default ProChatCircleprivateLine;
