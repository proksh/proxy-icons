import * as React from "react";
import { IconProps } from "./types";

export const ProChatCircleoffLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="m18 20 3 3 1.414-1.414-20-20L1 3l3 3a9.96 9.96 0 0 0-2 6 9.96 9.96 0 0 0 1.183 4.721l-1.144 4.004 1.236 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 6-2m-1.432-1.432A7.96 7.96 0 0 1 12 20a7.96 7.96 0 0 1-4.082-1.119l-.786-.102-2.676.765.765-2.676-.102-.785A7.96 7.96 0 0 1 4 12c0-1.698.53-3.273 1.432-4.568zM12 2a9.95 9.95 0 0 0-5.003 1.34l1.477 1.477a8 8 0 0 1 10.71 10.71l1.476 1.477A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10"
        />
      </svg>
    );
  },
);

export default ProChatCircleoffLine;
