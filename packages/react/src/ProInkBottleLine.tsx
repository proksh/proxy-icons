import * as React from "react";
import { IconProps } from "./types";

export const ProInkBottleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 3 7 4v4h10V4l-1-1zm1 3V5h6v1zM6.697 9h10.606L21 11.465V22H3V11.465zm.606 2L5 12.535V20h14v-1H8v-5h11v-1.465L16.697 11z"
        />
      </svg>
    );
  },
);

export default ProInkBottleLine;
