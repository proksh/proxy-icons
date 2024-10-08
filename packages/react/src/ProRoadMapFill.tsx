import * as React from "react";
import { IconProps } from "./types";

export const ProRoadMapFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 15s5-4.358 5-7.077c0-.601-.11-1.178-.31-1.71A5 5 0 0 0 12 3a5.03 5.03 0 0 0-3.18 1.124A4.88 4.88 0 0 0 7 7.924c0 .339.078.704.215 1.084C8.172 11.663 12 15 12 15"
        />
        <path
          fill={color}
          d="M12.469 17.247c.367-.317.734-.634 1.092-.96a32 32 0 0 0 2.444-2.489c.667-.763 1.379-1.665 1.934-2.602C18.465 10.309 19 9.147 19 7.923a6.8 6.8 0 0 0-.462-2.48L22 4v15.167l-7.038 2.932-6-3L2 22V6.833l3.486-1.452A6.8 6.8 0 0 0 5 7.923c0 1.224.535 2.386 1.06 3.273.556.937 1.268 1.84 1.934 2.602a31 31 0 0 0 2.445 2.488c.358.327.725.644 1.092.961l.469.406z"
        />
      </svg>
    );
  },
);

export default ProRoadMapFill;
