import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBack2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.652 3.47 6.5 3H21l1 1v16l-1 1H6.5l-.848-.47-5-8v-1.06zm9.823 12.42 1.414-1.415L14.414 12l2.475-2.475-1.414-1.414L13 10.586 10.525 8.11 9.111 9.525 11.586 12 9.11 14.475l1.414 1.414L13 13.414z"
        />
      </svg>
    );
  },
);

export default ProDeleteBack2Fill;
