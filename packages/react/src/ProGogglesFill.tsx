import * as React from "react";
import { IconProps } from "./types";

export const ProGogglesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 6.5a6 6 0 0 0-6 6c0 1.51.336 2.991 1.154 4.122C3.004 17.795 4.31 18.5 6 18.5c.777 0 1.476-.266 2.073-.59.593-.323 1.154-.742 1.643-1.113l.095-.072c.473-.358.876-.664 1.267-.893.417-.245.708-.332.922-.332s.505.087.922.332c.391.229.794.535 1.268.893l.094.072c.49.37 1.05.79 1.643 1.113.597.324 1.296.59 2.073.59 1.69 0 2.996-.705 3.846-1.878C22.664 15.492 23 14.01 23 12.5a6 6 0 0 0-6-6z"
        />
      </svg>
    );
  },
);

export default ProGogglesFill;
