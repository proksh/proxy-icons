import * as React from "react";
import { IconProps } from "./types";

export const ProContactsBookFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 2h11l1 1v18l-1 1H9zm3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-1 5v1h6v-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 2H3v20h4zm15 10v4h2v-4zm2-2h-2V6h2z"
        />
      </svg>
    );
  },
);

export default ProContactsBookFill;
