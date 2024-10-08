import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclemessageSentLine = React.forwardRef<
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
        d="M12 4a8 8 0 0 1 5.473 13.835l.034 1.488.79.677H12a8 8 0 1 1 0-16m10 8c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10h9l.65-1.76-2.042-1.75A9.96 9.96 0 0 0 22 12"
      />
    </svg>
  );
});

export default ProChatCirclemessageSentLine;
