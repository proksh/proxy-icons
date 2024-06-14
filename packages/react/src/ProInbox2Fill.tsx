import * as React from "react";
import { IconProps } from "./types";

export const ProInbox2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.802 3H4.198L2 12.89V21h20v-8.11zm-.049 9H15.1l-.194.75a3.002 3.002 0 0 1-5.81 0L8.9 12H4.247l1.555-7h12.396z"
        />
      </svg>
    );
  },
);

export default ProInbox2Fill;
