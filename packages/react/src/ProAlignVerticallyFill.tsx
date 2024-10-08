import * as React from "react";
import { IconProps } from "./types";

export const ProAlignVerticallyFill = React.forwardRef<
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
        d="M10 5.5H8V3H6v2.5H4l-.707 1.707 3 3h1.414l3-3zm3.293 1.707 3 3h1.414l3-3L20 5.5h-2V3h-2v2.5h-2zm7.414 10.086-3-3h-1.414l-3 3L14 19h2v2.5h2V19h2zm-10 0-3-3H6.293l-3 3L4 19h2v2.5h2V19h2zM21 11H3v2h18z"
      />
    </svg>
  );
});

export default ProAlignVerticallyFill;
