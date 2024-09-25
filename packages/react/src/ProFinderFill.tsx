import * as React from "react";
import { IconProps } from "./types";

export const ProFinderFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-8.465Q10.5 7.966 10.5 13h3a17 17 0 0 0-.107 2.877c1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043q.078.555.184 1.125H20zM6.556 14.168l-1.11 1.664C7.603 17.27 9.793 18 12.001 18v-2c-1.792 0-3.602-.603-5.445-1.832M17 7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M7 7c-.552 0-1 .452-1 1v1a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1"
        />
      </svg>
    );
  },
);

export default ProFinderFill;
