import * as React from "react";
import { IconProps } from "./types";

export const ProDrinks2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.677 1H4v2h3.323l1.2 3H3v2h2.064l1 15h11.873l.968-15H21V6H10.677zM7.272 11.045 7.069 8H16.9l-.327 5.06c-1.796.059-2.979-.339-4.298-.813l-.18-.066c-1.289-.465-2.723-.983-4.824-1.136m4.327 3.083c1.372.494 2.783.972 4.846.936L16.062 21H7.935l-.529-7.937c1.67.155 2.841.578 4.024 1.004z"
        />
      </svg>
    );
  },
);

export default ProDrinks2Line;
