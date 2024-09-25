import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclemessageRecievedFill = React.forwardRef<
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
        d="M12 2C6.477 2 2 6.477 2 12c0 2.477.901 4.744 2.392 6.49l-2.043 1.75L3 22h9c5.523 0 10-4.477 10-10S17.523 2 12 2"
      />
    </svg>
  );
});

export default ProChatCirclemessageRecievedFill;
