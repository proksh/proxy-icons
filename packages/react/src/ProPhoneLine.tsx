import * as React from "react";
import { IconProps } from "./types";

export const ProPhoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.096 3h6.381l.102.886a11.9 11.9 0 0 0 1.597 4.735l.449.756-1.771 1.386a11.6 11.6 0 0 0 3.579 3.508l1.27-1.837.798.462a11.9 11.9 0 0 0 4.613 1.525l.886.102v6.38l-.934.062A16 16 0 0 1 19 21C10.163 21 3 13.837 3 5q0-.537.035-1.066zM5 5c0 7.732 6.268 14 14 14v-2.723a14 14 0 0 1-3.684-1.214l-1.261 1.825-.783-.408a13.56 13.56 0 0 1-5.605-5.478l-.41-.745 1.772-1.388A14 14 0 0 1 7.722 5z"
        />
      </svg>
    );
  },
);

export default ProPhoneLine;
