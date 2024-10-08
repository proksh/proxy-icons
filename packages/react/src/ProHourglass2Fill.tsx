import * as React from "react";
import { IconProps } from "./types";

export const ProHourglass2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2 4 3v3l.35.76L10.462 12 4.35 17.24 4 18v3l1 1h14l1-1v-3l-.35-.76L13.538 12l6.114-5.24L20 6V3l-1-1zm11.376 18L13 17v-2.826l5 4.286V20zM11 17l-3.376 3H6v-1.54l5-4.286zm4.713-9.5H8.287L6 5.54V4h12v1.54z"
        />
      </svg>
    );
  },
);

export default ProHourglass2Fill;
