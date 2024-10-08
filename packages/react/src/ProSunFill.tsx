import * as React from "react";
import { IconProps } from "./types";

export const ProSunFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 4V1h2v3zm1 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12m11 5h-3v2h3zm-10 9v3h-2v-3zM1 13h3v-2H1zm4.636-5.95L3.515 4.93l1.414-1.414 2.121 2.12zM19.07 3.515l-2.12 2.121 1.413 1.414 2.122-2.121zm-.707 13.435 2.122 2.121-1.415 1.414-2.12-2.121zM4.929 20.485l2.121-2.121-1.414-1.414-2.121 2.121z"
        />
      </svg>
    );
  },
);

export default ProSunFill;
