import * as React from "react";
import { IconProps } from "./types";

export const ProShare2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.12 17.023a4.006 4.006 0 0 0 2.323 4.663A4 4 0 0 0 17 22c.668 0 1.297-.164 1.85-.453a4 4 0 0 0 1.836-1.99A4 4 0 0 0 21 18c0-.686-.173-1.331-.477-1.896a4 4 0 0 0-1.966-1.79A4 4 0 0 0 17 14a3.98 3.98 0 0 0-2.921 1.268l-4.2-2.29a4 4 0 0 0 .006-1.932l-.005-.023 4.199-2.29q.205.219.441.406A4 4 0 1 0 17.013 2H17a4 4 0 0 0-3.88 4.977l-4.199 2.29A3.98 3.98 0 0 0 6 8a4 4 0 1 0 2.921 6.733zM6 14a1.99 1.99 0 0 0 1.708-.96A2 2 0 0 0 8 12a2 2 0 0 0-.802-1.601A2 2 0 0 0 6 10a1.99 1.99 0 0 0-1.737 1.007 1.99 1.99 0 0 0-.106 1.771A2.01 2.01 0 0 0 6 14m11-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 12a1.99 1.99 0 0 0 1.653-.874A2 2 0 0 0 19 18a1.998 1.998 0 0 0-2.403-1.96A2.004 2.004 0 0 0 15 18a1.99 1.99 0 0 0 .836 1.626c.328.236.73.374 1.164.374"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProShare2Line;
