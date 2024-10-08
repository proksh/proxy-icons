import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclemessageSentFill = React.forwardRef<
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
        d="M12 2c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.392 6.49l2.043 1.75L21 22h-9C6.477 22 2 17.523 2 12S6.477 2 12 2"
      />
    </svg>
  );
});

export default ProChatCirclemessageSentFill;
