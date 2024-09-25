import * as React from "react";
import { IconProps } from "./types";

export const ProAsteriskFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.5 21v-6.402L4.956 17.8l-1.5-2.598L9 12.001 3.456 8.798l1.5-2.598L10.5 9.402V3h3v6.402l5.544-3.201 1.5 2.598L15 12l5.544 3.201-1.5 2.598-5.544-3.2V21z"
        />
      </svg>
    );
  },
);

export default ProAsteriskFill;
