import * as React from "react";
import { IconProps } from "./types";

export const ProVolumeMuteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 21.08V2.92L5.65 8H1v8h4.65zM17.586 12l-3.293-3.293 1.414-1.414L19 10.586l3.293-3.293 1.414 1.414L20.414 12l3.293 3.293-1.414 1.414L19 13.414l-3.293 3.293-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProVolumeMuteFill;
