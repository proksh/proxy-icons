import * as React from "react";
import { IconProps } from "./types";

export const ProInfinityFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 6a6 6 0 1 0 0 12c1.59 0 2.939-.496 4.095-1.485A8.7 8.7 0 0 0 12 14.95a8.7 8.7 0 0 0 1.406 1.564C14.56 17.504 15.91 18 17.5 18a6 6 0 0 0 0-12c-1.59 0-2.939.496-4.094 1.485A8.7 8.7 0 0 0 12 9.05a8.7 8.7 0 0 0-1.405-1.564C9.439 6.496 8.09 6 6.5 6m-3 6a3 3 0 0 1 3-3c.895 0 1.547.254 2.144.765.543.464 1.083 1.178 1.663 2.235-.58 1.057-1.12 1.77-1.663 2.235-.597.511-1.249.765-2.144.765a3 3 0 0 1-3-3m17 0a3 3 0 0 1-3 3c-.895 0-1.547-.254-2.145-.765-.543-.464-1.082-1.178-1.662-2.235.58-1.057 1.12-1.77 1.662-2.235C15.954 9.254 16.606 9 17.5 9a3 3 0 0 1 3 3"
        />
      </svg>
    );
  },
);

export default ProInfinityFill;
