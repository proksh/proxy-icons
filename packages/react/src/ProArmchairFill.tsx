import * as React from "react";
import { IconProps } from "./types";

export const ProArmchairFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 8q-.507 0-.985.097A5.5 5.5 0 0 1 9.5 3h5a5.5 5.5 0 0 1 5.485 5.097A5 5 0 0 0 14.415 11h-4.83A5 5 0 0 0 5 8"
        />
        <path
          fill={color}
          d="M5 10a3 3 0 0 0-1.5 5.599l.5.289V21h2v-1h12v1h2v-5.112l.5-.289a3 3 0 1 0-4.405-3.35L15.9 13H8.1l-.193-.75A3 3 0 0 0 5 10"
        />
      </svg>
    );
  },
);

export default ProArmchairFill;
