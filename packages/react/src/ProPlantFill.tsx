import * as React from "react";
import { IconProps } from "./types";

export const ProPlantFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3V2h1c4.03 0 6.637.613 8.189 2.088q.28.265.505.558C10.171 6.432 10.002 8.819 10 10.952c-2.49-.133-4.401-.567-5.736-1.598C2.5 7.992 2 5.818 2 3"
        />
        <path
          fill={color}
          d="M21 3v1c0 2.791-.434 4.947-2.01 6.317-1.36 1.182-3.372 1.593-5.99 1.67V13h5v8l-1 1H7l-1-1v-8h5v-3h.017c.07-1.864.391-3.594 1.586-4.87C14.016 3.618 16.394 3 20 3zM8 20h8v-5H8z"
        />
      </svg>
    );
  },
);

export default ProPlantFill;
