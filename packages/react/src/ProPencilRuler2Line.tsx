import * as React from "react";
import { IconProps } from "./types";

export const ProPencilRuler2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.1 16.243 16.244 2.1 21.9 7.757 7.758 21.9zm9.9-2.829-2.12-2.121-1.414 1.414 1.414 1.414-1.414 1.414-1.414-1.414-2.122 2.121 2.829 2.829L19.07 7.757 16.243 4.93l-2.121 2.12 1.414 1.414L14.12 9.88l-1.414-1.415-1.414 1.415L13.414 12zm4.183 7.011-2.06-2.061 1.413-1.415 1.476 1.475h1.414V17.01l-1.475-1.475 1.414-1.414 2.06 2.06v4.243zM7.05 8.464 5.638 9.878 1.748 5.99l4.243-4.242 3.888 3.889L8.465 7.05 5.991 4.575 4.576 5.99z"
        />
      </svg>
    );
  },
);

export default ProPencilRuler2Line;
