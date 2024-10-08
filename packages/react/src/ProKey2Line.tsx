import * as React from "react";
import { IconProps } from "./types";

export const ProKey2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.868 12.854a5 5 0 1 0 7.708.778l2.899-2.9 2.121 2.122 1.414-1.414-2.12-2.122 1.06-1.06 2.828 2.828 1.415-1.414-2.829-2.829 1.06-1.06-1.414-1.414-7.849 7.848a5 5 0 0 0-6.293.637m1.414 5.657a3 3 0 1 1 4.243-4.243 3 3 0 0 1-4.243 4.243"
        />
      </svg>
    );
  },
);

export default ProKey2Line;
