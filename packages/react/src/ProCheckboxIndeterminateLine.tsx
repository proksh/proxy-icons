import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxIndeterminateLine = React.forwardRef<
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
      <path fill={color} d="M8 13h8v-2H8z" />
      <path
        fill={color}
        d="M4 3 3 4v16l1 1h16l1-1V4l-1-1zm1 16V5h14v14z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProCheckboxIndeterminateLine;
