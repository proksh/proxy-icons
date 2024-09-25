import * as React from "react";
import { IconProps } from "./types";

export const ProBracketsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 2.5H9v3H6.5v13H9v3H3.5zm14 3H15v-3h5.5v19H15v-3h2.5z"
        />
      </svg>
    );
  },
);

export default ProBracketsFill;
