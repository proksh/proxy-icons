import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclemessageRecievedLine = React.forwardRef<
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
        d="M12 4a8 8 0 0 0-5.473 13.835l-.034 1.488-.79.677H12a8 8 0 1 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H3l-.65-1.76 2.042-1.75A9.96 9.96 0 0 1 2 12"
      />
    </svg>
  );
});

export default ProChatCirclemessageRecievedLine;
