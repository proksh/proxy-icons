import * as React from "react";
import { IconProps } from "./types";

export const ProSave3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3 4 1-1h12.5l.707.293 3.5 3.5L21 7.5V20l-1 1h-3v-7l-1-1H8l-1 1v7H4l-1-1zm4 0v5h9V4z"
        />
        <path fill={color} d="M9 21h6v-6H9z" />
      </svg>
    );
  },
);

export default ProSave3Fill;
