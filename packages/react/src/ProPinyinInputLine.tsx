import * as React from "react";
import { IconProps } from "./types";

export const ProPinyinInputLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 19v-5.174l-2 .571v-2.08l2-.571V8H3V6h2V3h2v3h2v2H7v3.174l2-.571v2.08l-2 .571V19a2 2 0 0 1-2 2H3v-2zm7-11h-2V6h2.277l-1.145-2.004 1.736-.992L14.58 6h1.84l1.712-2.996 1.736.992L18.723 6H21v2h-2v4h2v2h-2v7h-2v-7h-3a8 8 0 0 1-1.98 5.138l-1.767 2.02-1.505-1.317 1.768-2.02A6 6 0 0 0 11.999 14H10v-2h2zm2 0v4h3V8z"
        />
      </svg>
    );
  },
);

export default ProPinyinInputLine;
