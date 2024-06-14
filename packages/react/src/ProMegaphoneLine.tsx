import * as React from "react";
import { IconProps } from "./types";

export const ProMegaphoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.36 2.732a22.4 22.4 0 0 1-4.781 3.048C11.899 6.56 10.299 7 9 7H4L3 8v8l1 1h2.167L7 22h2v-5c1.3 0 2.9.44 4.579 1.22a22.4 22.4 0 0 1 4.78 3.048L20 20.5V14a2 2 0 1 0 0-4V3.5zM11 15.226V8.774c1.126-.239 2.29-.654 3.421-1.18A24 24 0 0 0 18 5.52v12.96a24 24 0 0 0-3.579-2.075c-1.132-.525-2.295-.94-3.421-1.18M9 9v6H5V9z"
        />
      </svg>
    );
  },
);

export default ProMegaphoneLine;
