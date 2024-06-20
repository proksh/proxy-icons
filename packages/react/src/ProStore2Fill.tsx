import * as React from "react";
import { IconProps } from "./types";

export const ProStore2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.644 2H4.356L1.691 7.863A4.24 4.24 0 0 0 1.25 9.75c0 1.413.69 2.665 1.75 3.437V21l1 1h16l1-1v-7.813a4.24 4.24 0 0 0 1.75-3.437c0-.676-.159-1.317-.441-1.887zM3.496 8.725 5.644 4h12.712l2.148 4.725.008.017a2.25 2.25 0 1 1-4.256 1.182L16.187 9h-1.872l-.07.924a2.25 2.25 0 0 1-4.487 0L9.687 9H7.813l-.07.924a2.25 2.25 0 1 1-4.256-1.182z"
        />
      </svg>
    );
  },
);

export default ProStore2Fill;
