import * as React from "react";
import { IconProps } from "./types";

export const ProBallPenLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.097 2.04h1.414l2.828 2.828v1.415l-1.414 1.414-4.243-4.243zm-2.829 2.828 5.656 5.657v1.414l-7.07 7.072-1.415-1.415 6.364-6.364-.707-.707L6.904 20.718H2.66v-4.243zm1.414 4.243-1.414-1.414-9.607 9.606v1.415h1.414z"
        />
      </svg>
    );
  },
);

export default ProBallPenLine;
