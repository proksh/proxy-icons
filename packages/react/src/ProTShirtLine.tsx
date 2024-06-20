import * as React from "react";
import { IconProps } from "./types";

export const ProTShirtLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m1.293 6.536 4.243-4.243H6.95L9.657 5h4.686l2.707-2.707h1.415l4.242 4.243V7.95L19 11.657V21l-1 1H6l-1-1v-9.343L1.293 7.95zm2.121.707L7 10.828V20h10v-9.171l3.586-3.586-2.829-2.829L15.172 7H8.828L6.243 4.414z"
        />
      </svg>
    );
  },
);

export default ProTShirtLine;
