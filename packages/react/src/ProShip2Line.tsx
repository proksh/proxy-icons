import * as React from "react";
import { IconProps } from "./types";

export const ProShip2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 2H5v2h-.5l-1 1v5h-1l-.979 1.206L2.951 18H4q.5 0 .981-.068L3.732 12H20.42l-2.668 5.632a7 7 0 0 0 2.04.365L23.58 10h-4.506l-3.21-5.504L15 4H9zm5.426 4 2.333 4H5.5V6zM16.5 19.064l-.5-.29-.5.29A6.96 6.96 0 0 1 12 20c-1.277 0-2.47-.34-3.5-.936l-.5-.29-.5.29A6.96 6.96 0 0 1 4 20H2v2h2a9 9 0 0 0 4-.936c1.206.6 2.565.936 4 .936a9 9 0 0 0 4-.936c1.206.6 2.565.936 4 .936h2v-2h-2c-1.277 0-2.47-.34-3.5-.936"
        />
      </svg>
    );
  },
);

export default ProShip2Line;
