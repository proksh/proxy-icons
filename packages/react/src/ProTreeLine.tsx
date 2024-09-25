import * as React from "react";
import { IconProps } from "./types";

export const ProTreeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a6 6 0 0 0-5.95 6.775A6 6 0 0 0 9 19h2v3h2v-3h2a6 6 0 0 0 2.95-11.225Q18 7.394 18 7a6 6 0 0 0-6-6M8 7a4 4 0 1 1 7.855 1.073l-.242.87.841.33A4.002 4.002 0 0 1 15 17H9a4 4 0 0 1-1.454-7.728l.841-.328-.242-.87A4 4 0 0 1 8 7"
        />
      </svg>
    );
  },
);

export default ProTreeLine;
