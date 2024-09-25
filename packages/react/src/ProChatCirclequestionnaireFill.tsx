import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclequestionnaireFill = React.forwardRef<
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
        d="M2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m10-3a1.5 1.5 0 0 0-1.47 1.199L8.57 9.8A3.5 3.5 0 1 1 12 14h-1v-2h1a1.5 1.5 0 0 0 0-3m-1 8v-2h2v2z"
      />
    </svg>
  );
});

export default ProChatCirclequestionnaireFill;
