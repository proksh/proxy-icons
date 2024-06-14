import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclevideoLine = React.forwardRef<
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
      <path fill={color} d="M7 9h7v2.25L17 9v6l-3-2.25V15H7z" />
      <path
        fill={color}
        d="M12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 3.918 6.881l-.786-.102-2.676.765.764-2.676-.102-.785A7.96 7.96 0 0 1 4 12"
      />
    </svg>
  );
});

export default ProChatCirclevideoLine;
