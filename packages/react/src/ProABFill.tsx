import * as React from "react";
import { IconProps } from "./types";

export const ProABFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 2.5h3A4.5 4.5 0 0 1 21.5 7v2h-3V7A1.5 1.5 0 0 0 17 5.5h-3zm-4 19H7A4.5 4.5 0 0 1 2.5 17v-2h3v2A1.5 1.5 0 0 0 7 18.5h3zm4.995-3.5-1.154 3h-2.143l4.37-11.359h1.866L22.303 21H20.16l-1.154-3zm.77-2h2.472L17 12.786zM3 3h5a3 3 0 0 1 2.615 4.471A3 3 0 0 1 9 13H3zm2 4h3a1 1 0 0 0 0-2H5zm0 2v2h4a1 1 0 1 0 0-2z"
        />
      </svg>
    );
  },
);

export default ProABFill;
