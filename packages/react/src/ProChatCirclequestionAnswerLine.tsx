import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclequestionAnswerLine = React.forwardRef<
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
        d="M10.5 2a8.5 8.5 0 0 0-6.574 13.889L2.35 17.24 3 19h7.555a9 9 0 0 0 .732-.036A8.502 8.502 0 0 0 18.71 8.293 8.504 8.504 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 6.5 6.5H5.703l.316-.27.034-1.49A6.48 6.48 0 0 1 4 10.5"
      />
      <path
        fill={color}
        d="M20.997 10.75a10.45 10.45 0 0 1-1.022 4.281 5.48 5.48 0 0 1-1.712 3.48L18.297 20h-3.319a10.45 10.45 0 0 1-4.227.997 7.46 7.46 0 0 0 3.18.982l.006-.067L14 22h7l.651-1.76-1.269-1.087A7.47 7.47 0 0 0 22 14.5a7.47 7.47 0 0 0-1.003-3.75"
      />
    </svg>
  );
});

export default ProChatCirclequestionAnswerLine;
