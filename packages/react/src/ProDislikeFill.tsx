import * as React from "react";
import { IconProps } from "./types";

export const ProDislikeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.4 17.4 20 21l1.414-1.414-18-18L2 3l1.674 1.674q-.082.075-.16.154a6 6 0 0 0 0 8.486l8.485 8.485zm4.087-4.086-1.259 1.258-11.5-11.5a5.98 5.98 0 0 1 4.271 1.756L12 4.83l.001-.002a6 6 0 0 1 8.486 8.486"
        />
      </svg>
    );
  },
);

export default ProDislikeFill;
