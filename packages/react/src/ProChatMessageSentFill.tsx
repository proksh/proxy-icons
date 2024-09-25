import * as React from "react";
import { IconProps } from "./types";

export const ProChatMessageSentFill = React.forwardRef<
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
      <path fill={color} d="M2 3h20v19.304L16.713 19H2z" />
    </svg>
  );
});

export default ProChatMessageSentFill;
