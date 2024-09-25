import * as React from "react";
import { IconProps } from "./types";

export const ProStarHalfLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2.581h-.908L8.505 8.19l-6.133.727-.562 1.727 4.535 4.193-1.204 6.058 1.47 1.068L12 18.946v-2.019h-.489L7.525 19.16l.89-4.48-.301-.93-3.354-3.101 4.536-.538.79-.574L12 5.388z"
        />
      </svg>
    );
  },
);

export default ProStarHalfLine;
