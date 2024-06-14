import * as React from "react";
import { IconProps } from "./types";

export const ProChatCircleprivateFill = React.forwardRef<
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
      <path fill={color} d="M10 14v-1h4v1zm3-4v1h-2v-1a1 1 0 1 1 2 0" />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m7-2v1H8v5h8v-5h-1v-1a3 3 0 1 0-6 0"
      />
    </svg>
  );
});

export default ProChatCircleprivateFill;
