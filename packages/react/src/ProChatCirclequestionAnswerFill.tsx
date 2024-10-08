import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclequestionAnswerFill = React.forwardRef<
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
        d="M10.5 2a8.5 8.5 0 0 0-6.574 13.889L2.35 17.24 3 19h7.5a8.5 8.5 0 0 0 0-17"
      />
      <path
        fill={color}
        d="M20.997 10.75c-.131 5.6-4.646 10.116-10.246 10.247a7.46 7.46 0 0 0 3.18.982l.005-.067L14 22h7l.65-1.76-1.268-1.087A7.47 7.47 0 0 0 22 14.5a7.47 7.47 0 0 0-1.003-3.75"
      />
    </svg>
  );
});

export default ProChatCirclequestionAnswerFill;
