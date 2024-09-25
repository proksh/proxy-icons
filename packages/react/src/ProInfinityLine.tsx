import * as React from "react";
import { IconProps } from "./types";

export const ProInfinityLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.5 6.5a5.5 5.5 0 1 0 0 11c1.474 0 2.707-.456 3.77-1.365.644-.55 1.208-1.254 1.73-2.081.522.828 1.086 1.53 1.73 2.08 1.063.91 2.296 1.366 3.77 1.366a5.5 5.5 0 1 0 0-11c-1.474 0-2.707.456-3.77 1.365-.644.55-1.208 1.254-1.73 2.081-.522-.827-1.086-1.53-1.73-2.08C9.207 6.955 7.974 6.5 6.5 6.5M3 12a3.5 3.5 0 0 1 3.5-3.5c1.01 0 1.779.294 2.47.885.649.555 1.262 1.401 1.906 2.615-.644 1.214-1.257 2.06-1.907 2.615-.69.59-1.458.885-2.469.885A3.5 3.5 0 0 1 3 12m18 0a3.5 3.5 0 0 1-3.5 3.5c-1.01 0-1.779-.294-2.47-.885-.649-.555-1.262-1.401-1.905-2.615.643-1.214 1.256-2.06 1.906-2.615.69-.59 1.458-.885 2.469-.885A3.5 3.5 0 0 1 21 12"
        />
      </svg>
    );
  },
);

export default ProInfinityLine;
