import * as React from "react";
import { IconProps } from "./types";

export const ProFootballFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.78 6.87a9.94 9.94 0 0 1 1.401 4.609q.012.26.012.521c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.5 4.442-9.964 9.934-10h.066a9.99 9.99 0 0 1 8.587 4.87m-6.067-2.465-1.52 1.104v1.982l2.98 2.165 1.884-.612.58-1.786a8 8 0 0 0-3.924-2.853m5.48 7.644-1.518-1.103-1.885.612-1.15 3.539.97 1.334h2.245a7.96 7.96 0 0 0 1.338-4.382m-5.887 7.67.686-2.112-.996-1.37h-3.683L9.22 17.74l.62 1.907a8 8 0 0 0 2.353.352 8 8 0 0 0 2.113-.282m-8.683-3.154h1.98l1.118-1.54-1.126-3.468-1.63-.53-1.766 1.284a7.96 7.96 0 0 0 1.424 4.254m.285-9.515.675 2.076 1.63.53 2.98-2.166V5.51l-1.52-1.105A8 8 0 0 0 5.908 7.05"
        />
      </svg>
    );
  },
);

export default ProFootballFill;
