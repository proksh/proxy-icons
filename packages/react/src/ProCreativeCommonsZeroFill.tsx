import * as React from "react";
import { IconProps } from "./types";

export const ProCreativeCommonsZeroFill = React.forwardRef<
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
        d="M12 8c-1.46 0-3 1.571-3 4 0 .909.216 1.698.562 2.33l3.394-6.11A2.3 2.3 0 0 0 12 8m0 8a2.3 2.3 0 0 1-.956-.22l3.394-6.109c.346.631.562 1.42.562 2.329 0 2.429-1.54 4-3 4"
      />
      <path
        fill={color}
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12m5 0c0-3.094 2.042-6 5-6s5 2.906 5 6-2.042 6-5 6-5-2.906-5-6"
      />
    </svg>
  );
});

export default ProCreativeCommonsZeroFill;
