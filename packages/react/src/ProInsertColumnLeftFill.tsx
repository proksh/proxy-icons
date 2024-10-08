import * as React from "react";
import { IconProps } from "./types";

export const ProInsertColumnLeftFill = React.forwardRef<
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
        d="M22 3h-8v18h8zM7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10m-1-2v-2H4v-2h2V9h2v2h2v2H8v2z"
      />
    </svg>
  );
});

export default ProInsertColumnLeftFill;
