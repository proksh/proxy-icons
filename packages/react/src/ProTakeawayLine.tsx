import * as React from "react";
import { IconProps } from "./types";

export const ProTakeawayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3V1h4l1 1v1h4l1 1v4l-1 1h-1.066l2.696 7.318A4 4 0 1 1 15.126 19h-4.252a4.002 4.002 0 0 1-7.748 0H3l-1-1V3h9v10h4V3zm7.665 11.055L17.803 9H17v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.539-2.945M17 5v2h3V5zM4 11h5V8H4zm5-6H4v1h5zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
    );
  },
);

export default ProTakeawayLine;
