import * as React from "react";
import { IconProps } from "./types";

export const ProSparklingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.586 2.65.14-.65h.548l.14.65a2.52 2.52 0 0 0 1.935 1.936l.651.14v.548l-.65.14a2.52 2.52 0 0 0-1.936 1.935l-.14.651h-.548l-.14-.65a2.52 2.52 0 0 0-1.935-1.936L14 5.274v-.548l.65-.14a2.52 2.52 0 0 0 1.936-1.935m.863 12.217.186-.868h.73l.187.868a3.36 3.36 0 0 0 2.58 2.58l.868.187v.73l-.868.187a3.36 3.36 0 0 0-2.58 2.58l-.187.868h-.73l-.187-.868a3.36 3.36 0 0 0-2.58-2.58L14 18.365v-.73l.868-.187a3.36 3.36 0 0 0 2.58-2.58M1 13v-2c3.13 0 6-2.83 6-6h2c0 3.17 2.87 6 6 6v2c-3.13 0-6 2.83-6 6H7c0-3.13-2.83-6-6-6"
        />
      </svg>
    );
  },
);

export default ProSparklingFill;
