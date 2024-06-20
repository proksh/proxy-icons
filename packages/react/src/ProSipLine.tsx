import * as React from "react";
import { IconProps } from "./types";

export const ProSipLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.328 5.947-1.767-1.768-1.415 1.414 1.414 1.415-9.485 9.485v4.243h4.243l9.485-9.486 1.414 1.414 1.415-1.414-1.768-1.768 2.828-2.828V5.24l-2.121-2.121h-1.415zm-.353 2.475 1.414 1.414-8.839 8.839-1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProSipLine;
