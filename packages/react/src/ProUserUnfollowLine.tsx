import * as React from "react";
import { IconProps } from "./types";

export const ProUserUnfollowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M8 16h6l2-2H8a5 5 0 0 0-5 5v3h2v-3a3 3 0 0 1 3-3m9.586 3-2.121-2.121 1.414-1.415L19 17.586l2.121-2.121 1.415 1.414L20.414 19l2.121 2.121-1.414 1.415L19 20.414l-2.121 2.121-1.415-1.414z"
        />
      </svg>
    );
  },
);

export default ProUserUnfollowLine;
