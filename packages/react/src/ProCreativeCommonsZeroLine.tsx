import * as React from "react";
import { IconProps } from "./types";

export const ProCreativeCommonsZeroLine = React.forwardRef<
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
        d="M7 12c0-3.094 2.042-6 5-6s5 2.906 5 6-2.042 6-5 6-5-2.906-5-6m5-4c-1.46 0-3 1.571-3 4 0 .909.216 1.698.562 2.33l3.394-6.11A2.3 2.3 0 0 0 12 8m2.438 1.671-3.394 6.11c.311.143.635.219.956.219 1.46 0 3-1.571 3-4 0-.909-.216-1.698-.562-2.329"
      />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      />
    </svg>
  );
});

export default ProCreativeCommonsZeroLine;
