import * as React from "react";
import { IconProps } from "./types";

export const ProInputCursorMoveFill = React.forwardRef<
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
        d="M13.5 5.5H16v-3H8v3h2.5v13H8v3h8v-3h-2.5zm6.586 6.5-3.293-3.293 1.414-1.414L22.915 12l-4.708 4.707-1.414-1.414zM7.207 8.707 3.914 12l3.293 3.293-1.414 1.414L1.086 12l4.707-4.707z"
      />
    </svg>
  );
});

export default ProInputCursorMoveFill;
