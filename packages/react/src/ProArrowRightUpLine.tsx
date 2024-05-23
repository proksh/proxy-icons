import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.585 7.004 5.3 17.29l1.414 1.414L17 8.418v8.586h2v-12H7v2z"
        />
      </svg>
    );
  },
);

export default ProArrowRightUpLine;
