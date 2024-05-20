import * as React from "react";
import { IconProps } from "./types";

export const ProLoginCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 12c0-5.523-4.477-10-10-10-4.992 0-9.129 3.657-9.879 8.438h4.884V7L12 12.013 7.005 17v-3.438H2.12C2.871 18.342 7.008 22 12 22c5.523 0 10-4.477 10-10"
        />
      </svg>
    );
  },
);

export default ProLoginCircleFill;
