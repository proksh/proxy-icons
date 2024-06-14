import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclesettingsFill = React.forwardRef<
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
      <path fill={color} d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      <path
        fill={color}
        d="M2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m6.17-3.366.976.563A4 4 0 0 1 11 8.126V7h2v1.126c.715.184 1.353.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.563A4 4 0 0 1 13 15.874V17h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564-1-1.732.975-.563a4 4 0 0 1 0-2.142l-.975-.563z"
      />
    </svg>
  );
});

export default ProChatCirclesettingsFill;
