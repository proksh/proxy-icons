import * as React from "react";
import { IconProps } from "./types";

export const ProUbuntuLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8.668 19.273 1.006-1.742a6 6 0 0 0 8.282-4.781h2.012A8 8 0 0 1 18.929 16a8 8 0 0 1-1.452 1.835 2.5 2.5 0 0 0-1.976.227 2.5 2.5 0 0 0-1.184 1.595 7.98 7.98 0 0 1-5.65-.384m-1.3-.75a7.98 7.98 0 0 1-3.157-4.7C4.696 13.367 5 12.719 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.073 8a8 8 0 0 1 2.295-2.524l1.006 1.742a6 6 0 0 0 0 9.563zm1.3-13.796a8 8 0 0 1 5.648-.387 2.497 2.497 0 0 0 3.161 1.825 8 8 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072M4.001 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m12 6.928a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598"
        />
      </svg>
    );
  },
);

export default ProUbuntuLine;
