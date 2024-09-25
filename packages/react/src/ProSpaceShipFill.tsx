import * as React from "react";
import { IconProps } from "./types";

export const ProSpaceShipFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.619 2.666-.175.155c-.15.135-.366.338-.631.612a23 23 0 0 0-2.094 2.524C7.064 8.25 5.038 11.8 3.521 16.857l-.15.501.044.011c.324.081.648.162.974.234s.79.17 1.36.273a40 40 0 0 0 4.07.537L12 23.208l2.18-4.795a40 40 0 0 0 5.43-.81c.327-.072.651-.153.975-.234l.045-.011-.15-.502c-1.518-5.056-3.543-8.606-5.2-10.899a23 23 0 0 0-2.092-2.524 14 14 0 0 0-.807-.767l-.062-.052L12 2.36l-.111.089q-.136.106-.27.217M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        />
      </svg>
    );
  },
);

export default ProSpaceShipFill;
