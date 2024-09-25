import * as React from "react";
import { IconProps } from "./types";

export const ProChatCirclethreadFill = React.forwardRef<
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
      <path fill={color} d="M10.92 13h1.994l.166-2h-1.993z" />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.721-1.183l-4.004 1.145-1.237-1.237 1.145-4.004A9.96 9.96 0 0 1 2 12m13.42-5h-2.006l-.167 2h-1.993l.167-2H9.414l-.167 2H7v2h2.08l-.166 2H7v2h1.747l-.167 2h2.007l.167-2h1.993l-.167 2h2.007l.167-2H17v-2h-2.08l.167-2H17V9h-1.746z"
      />
    </svg>
  );
});

export default ProChatCirclethreadFill;
