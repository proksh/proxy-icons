import * as React from "react";
import { IconProps } from "./types";

export const ProCheckboxMultipleBlankLine = React.forwardRef<
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
        d="M8 2 7 3v4H3L2 8v13l1 1h13l1-1v-4h4l1-1V3l-1-1zm9 13h3V4H9v3h7l1 1zM4 20V9h11v11z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

export default ProCheckboxMultipleBlankLine;
