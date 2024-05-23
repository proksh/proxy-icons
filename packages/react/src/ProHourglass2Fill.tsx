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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M5 2 4 3v3l.35.76L10.462 12 4.35 17.24 4 18v3l1 1h14l1-1v-3l-.35-.76L13.538 12l6.114-5.24L20 6V3l-1-1zm11.376 18H18v-1.54l-5-4.286V17zM11 17v-2.826L6 18.46V20h1.624zm4.713-9.5H8.287L6 5.54V4h12v1.54z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProHourglass2Fill;
