import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclesettingsLine = React.forwardRef<
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
        d="m8.17 8.634.976.563A4 4 0 0 1 11 8.126V7h2v1.126c.715.184 1.353.56 1.854 1.072l.976-.564 1 1.732-.975.563a4 4 0 0 1 0 2.142l.975.563-1 1.732-.976-.563A4 4 0 0 1 13 15.874V17h-2v-1.126a4 4 0 0 1-1.854-1.072l-.976.564-1-1.732.975-.563a4 4 0 0 1 0-2.142l-.975-.563zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
      <path
        fill={color}
        d="M12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 3.918 6.881l-.786-.102-2.676.765.764-2.676-.102-.785A7.96 7.96 0 0 1 4 12"
      />
    </svg>
  );
});

export default ProChatCirclesettingsLine;
