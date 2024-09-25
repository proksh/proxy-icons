import * as React from "react";
import { IconProps } from "./types";

export const ProMapPin5Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 21.333a50 50 0 0 1-1.791-1.641 43 43 0 0 1-2.466-2.607c-.895-1.036-1.813-2.22-2.512-3.414C4.546 12.503 4 11.206 4 9.974 4 5.567 7.585 2 12 2s8 3.567 8 7.974c0 1.232-.546 2.528-1.23 3.697-.7 1.194-1.618 2.378-2.513 3.415a42 42 0 0 1-2.466 2.606A50 50 0 0 1 12 21.333M19 24v-2H5v2z"
        />
      </svg>
    );
  },
);

export default ProMapPin5Fill;
