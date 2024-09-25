import * as React from "react";
import { IconProps } from "./types";

export const ProChatMessageSentLine = React.forwardRef<
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
        d="M22 3H2v16h14.713L22 22.304zm-2 2v13.696L17.287 17H4V5z"
      />
    </svg>
  );
});

export default ProChatMessageSentLine;
