import * as React from "react";
import { IconProps } from "./types";

export const ProInsertColumnLeftLine = React.forwardRef<
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
        d="M22 3h-8v18h8zm-2 16h-4V5h4zM7 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0m5 1v2h2v-2h2v-2H8V9H6v2H4v2z"
      />
    </svg>
  );
});

export default ProInsertColumnLeftLine;
