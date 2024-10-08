import * as React from "react";
import { IconProps } from "./types";

export const ProSyringeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m16.657 1.686 5.657 5.657-1.415 1.414-2.12-2.12-2.122 2.12 2.121 2.122v1.414l-7.071 7.071-.707.293H5.757L3.93 21.485l-1.414-1.414 1.828-1.828V13l.293-.707 7.071-7.071h1.414l2.122 2.121 2.12-2.121-2.12-2.122zM11.354 11.94l1.414-1.414-2.475-2.475-1.414 1.414zm-2.829 2.829 1.414-1.415-2.474-2.474-1.415 1.414z"
        />
      </svg>
    );
  },
);

export default ProSyringeFill;
