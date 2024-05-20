import * as React from "react";
import { IconProps } from "./types";

export const ProArrowRightUpSmLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m13.449 9.003-6.196 6.195 1.551 1.552L15 10.554v4.449h2v-8H9v2z"
        />
      </svg>
    );
  },
);

export default ProArrowRightUpSmLine;
