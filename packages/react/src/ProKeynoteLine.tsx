import * as React from "react";
import { IconProps } from "./types";

export const ProKeynoteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.03 2.757 5 2h14l.97.757 2 8L21 12h-8v8h4v2H7v-2h4v-8H3l-.97-1.242zM5.781 4l-1.5 6H19.72l-1.5-6z"
        />
      </svg>
    );
  },
);

export default ProKeynoteLine;
