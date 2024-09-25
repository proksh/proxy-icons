import * as React from "react";
import { IconProps } from "./types";

export const ProCreativeCommonsSaLine = React.forwardRef<
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
        d="M12 8c-1.46 0-3 1.571-3 4h1.5L8 14.5 5.5 12H7c0-3.094 2.042-6 5-6s5 2.906 5 6-2.042 6-5 6c-1.482 0-2.765-.763-3.643-1.883l1.573-1.234C10.504 15.615 11.244 16 12 16c1.46 0 3-1.571 3-4s-1.54-4-3-4"
      />
      <path
        fill={color}
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      />
    </svg>
  );
});

export default ProCreativeCommonsSaLine;
