import * as React from "react";
import { IconProps } from "./types";

export const ProNumber2Line = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M12 1.5a6 6 0 0 0-6 6h2a4 4 0 1 1 8 0v.095c0 .987-.357 1.941-1.005 2.687L6 20.626V22h12v-2H9.195l7.31-8.406a6.1 6.1 0 0 0 1.495-4V7.5a6 6 0 0 0-6-6"
        />
      </svg>
    );
  },
);

export default ProNumber2Line;
