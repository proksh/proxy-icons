import * as React from "react";
import { IconProps } from "./types";

export const ProEBike2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3h3v10h-4V6H2v12l1 1h.126a4.002 4.002 0 0 0 7.748 0h4.252a4.002 4.002 0 1 0 7.504-2.682L19.934 9H21l1-1V4l-1-1h-4V2l-1-1h-4zm7.665 11.055A4 4 0 0 0 15.125 17h-4.251A4.002 4.002 0 0 0 4 15.354V13h5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9h.803zM20 7h-3V5h3zM4 11V8h5v3zm3 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        />
      </svg>
    );
  },
);

export default ProEBike2Line;
