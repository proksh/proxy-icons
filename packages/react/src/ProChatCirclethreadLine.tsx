import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclethreadLine = React.forwardRef<
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
        d="M15.42 7h-2.006l-.167 2h-1.993l.167-2H9.414l-.167 2H7v2h2.08l-.166 2H7v2h1.747l-.167 2h2.007l.167-2h1.993l-.167 2h2.007l.167-2H17v-2h-2.08l.167-2H17V9h-1.746zm-4.5 6 .167-2h1.993l-.166 2z"
      />
      <path
        fill={color}
        d="M12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 1.183 4.721l-1.145 4.004 1.237 1.236 4.004-1.144A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 3.918 6.881l-.786-.102-2.676.765.764-2.676-.102-.785A7.96 7.96 0 0 1 4 12"
      />
    </svg>
  );
});

export default ProChatCirclethreadLine;
