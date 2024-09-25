import * as React from "react";
import { IconProps } from "./types";

export const ProMapPinUserFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
        <path
          fill={color}
          d="M13.949 22.04a49 49 0 0 0 2.809-2.98c1.02-1.186 2.063-2.537 2.856-3.895C20.392 13.83 21 12.373 21 11a9 9 0 1 0-18 0c0 1.373.608 2.831 1.386 4.165.793 1.358 1.835 2.709 2.856 3.894a49 49 0 0 0 2.81 2.98A54 54 0 0 0 12 23.836a54 54 0 0 0 1.949-1.795M12 4a7 7 0 0 1 7 7c0 .836-.392 1.92-1.114 3.157q-.326.557-.712 1.118C15.994 13.865 14.078 13 12 13s-3.994.864-5.174 2.275a18 18 0 0 1-.712-1.118C5.392 12.92 5 11.837 5 11a7 7 0 0 1 7-7"
        />
      </svg>
    );
  },
);

export default ProMapPinUserFill;
