import * as React from "react";
import { IconProps } from "./types";

export const ProSkipForwardMiniFill = React.forwardRef<
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
        d="M16 7v10h2V7zM6 8l1.496-.868 7 4v1.736l-7 4L6 16z"
      />
    </svg>
  );
});

export default ProSkipForwardMiniFill;
