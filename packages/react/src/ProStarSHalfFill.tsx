import * as React from "react";
import { IconProps } from "./types";

export const ProStarSHalfFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 7.388-1.349 2.924-.79.574-3.199.38 2.365 2.186.302.93L8.7 17.54l2.81-1.574h.977l2.81 1.574-.627-3.16.302-.929 2.365-2.186-3.199-.38-.79-.574zM9.07 8.966l2.022-4.385h1.816l2.023 4.385 4.795.569.561 1.727-3.545 3.279.941 4.736-1.47 1.068L12 17.986l-4.214 2.359-1.47-1.068.942-4.736-3.545-3.279.56-1.727z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12 5v11.84l-4.702 2.632 1.05-5.285-3.956-3.66 5.35-.634z"
        />
      </svg>
    );
  },
);

export default ProStarSHalfFill;
