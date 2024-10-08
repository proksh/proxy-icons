import * as React from "react";
import { IconProps } from "./types";

export const ProEmpathizeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2.466 9.542c.914.276 1.783.827 2.466 1.423.683-.596 1.552-1.147 2.466-1.423 1.03-.31 2.283-.303 3.27.629a3.946 3.946 0 0 1 0 5.788l-5.737 5.416-5.735-5.416a3.946 3.946 0 0 1 0-5.788c.987-.932 2.24-.939 3.27-.629"
        />
      </svg>
    );
  },
);

export default ProEmpathizeFill;
