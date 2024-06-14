import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding2Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 1.816V19h2V6.305l7 2.6V19h2v2H1v-2h2V5.316z"
        />
      </svg>
    );
  },
);

export default ProBuilding2Fill;
