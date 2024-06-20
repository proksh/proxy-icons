import * as React from "react";
import { IconProps } from "./types";

export const ProTrademarkFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M10 8.5H6.5V18h-3V8.5H0v-3h10zm1.5 9.5V5.5h2.962l3.038 4.726L20.538 5.5H23.5V18h-3v-6.893l-3 4.667-3-4.667V18z"
        />
      </svg>
    );
  },
);

export default ProTrademarkFill;
