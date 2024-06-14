import * as React from "react";
import { IconProps } from "./types";

export const ProChatMessageRecievedLine = React.forwardRef<
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
        d="M2 3h20v16H7.287L2 22.304zm2 2v13.696L6.713 17H20V5z"
      />
    </svg>
  );
});

export default ProChatMessageRecievedLine;
