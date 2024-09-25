import * as React from "react";
import { IconProps } from "./types";

export const ProMailCloseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h13v-2H4V7.227l8 7.111 8-7.11V14h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path
          fill={color}
          d="M22.122 15.465 20 17.585l-2.12-2.12-1.415 1.414L18.586 19l-2.121 2.121 1.414 1.415L20 20.414l2.122 2.121 1.414-1.414L21.415 19l2.12-2.121z"
        />
      </svg>
    );
  },
);

export default ProMailCloseLine;
