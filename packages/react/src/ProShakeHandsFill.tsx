import * as React from "react";
import { IconProps } from "./types";

export const ProShakeHandsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.057 3.362a2.32 2.32 0 0 0-2.13.625l-4.18 4.18a.786.786 0 0 0 1.098 1.125l4.264-4.056 8.7 8.182L22 13.18V5.306z"
        />
        <path
          fill={color}
          d="m12.117 7.989 7.995 7.518a.999.999 0 0 1-1.687.907l-5.127-5.126-1.06 1.06 4.435 4.436a1 1 0 0 1-1.43 1.398l-4.42-4.42-1.06 1.061 3.721 3.722a1 1 0 0 1-1.423 1.405l-3.713-3.713-1.061 1.061 3.03 3.03a1 1 0 0 1-1.438 1.39l-2.98-2.981L1.75 13.73V4.75h5.586L5.334 6.753a2.786 2.786 0 0 0 3.89 3.988z"
        />
      </svg>
    );
  },
);

export default ProShakeHandsFill;
