import * as React from "react";
import { IconProps } from "./types";

export const ProSaveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3h12.5l.707.293 3.5 3.5L21 7.5V20l-1 1H4l-1-1V4zm13 16h2V7.914L16.086 5H5v14h2v-5l1-1h8l1 1zm-8 0h6v-4H9z"
        />
      </svg>
    );
  },
);

export default ProSaveLine;
