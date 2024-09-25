import * as React from "react";
import { IconProps } from "./types";

export const ProBlurOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 .164a55 55 0 0 0-1.949 1.796 51 51 0 0 0-1.696 1.738l12.176 12.177c.304-.903.47-1.87.47-2.875 0-1.373-.609-2.831-1.387-4.165-.793-1.358-1.835-2.709-2.856-3.894a49 49 0 0 0-2.809-2.98A55 55 0 0 0 12 .163m6.364 19.201L21 22l1.414-1.414-19-19L2 3l3.77 3.77a22 22 0 0 0-1.384 2.065C3.608 10.17 3 11.627 3 13a9 9 0 0 0 15.364 6.364"
        />
      </svg>
    );
  },
);

export default ProBlurOffFill;
