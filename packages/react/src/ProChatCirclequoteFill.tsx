import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclequoteFill = React.forwardRef<
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
        d="M2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m6 3v-2.5L9.5 9H11l-1 3.5h1.5V15zm4.5 0v-2.5L14 9h1.5l-1 3.5H16V15z"
      />
    </svg>
  );
});

export default ProChatCirclequoteFill;
