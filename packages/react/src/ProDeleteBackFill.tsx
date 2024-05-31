import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBackFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.652 3.47 6.5 3H21l1 1v16l-1 1H6.5l-.848-.47-5-8v-1.06zM16 11H9v2h7z"
        />
      </svg>
    );
  },
);

export default ProDeleteBackFill;
