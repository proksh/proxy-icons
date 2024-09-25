import * as React from "react";
import { IconProps } from "./types";

export const ProBallPenFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.097 2.04h1.414l2.828 2.828v1.415l-1.414 1.414-4.243-4.243zm-2.829 2.828L2.66 16.475v4.243h4.243l10.192-10.193.707.707-6.364 6.364 1.414 1.415 7.071-7.072v-1.414z"
        />
      </svg>
    );
  },
);

export default ProBallPenFill;
