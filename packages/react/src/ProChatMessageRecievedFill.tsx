import * as React from "react";
import { IconProps } from "./types";

export const ProChatMessageRecievedFill = React.forwardRef<
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
      <path fill={color} d="M22 3H2v19.304L7.287 19H22z" />
    </svg>
  );
});

export default ProChatMessageRecievedFill;
