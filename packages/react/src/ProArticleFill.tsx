import * as React from "react";
import { IconProps } from "./types";

export const ProArticleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2v20h18V2zm4 8V6h4v4zm10 4H7v-2h10zm-4-5V7h4v2zm4 9H7v-2h10z"
        />
      </svg>
    );
  },
);

export default ProArticleFill;
