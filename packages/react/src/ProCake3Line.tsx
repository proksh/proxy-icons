import * as React from "react";
import { IconProps } from "./types";

export const ProCake3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.574 3.579a3.5 3.5 0 0 1 6.35 2.651 4.502 4.502 0 0 1-.025 8.548L17.867 22H6.191l-1.503-7.016a3 3 0 0 1-.686-5.814L4 9a6 6 0 0 1 8.574-5.421m1.64 1.15a6 6 0 0 1 1.238 1.763A4.5 4.5 0 0 1 16.9 6.04q.098-.253.1-.54a1.5 1.5 0 0 0-2.787-.772M15 20h1.132l.715-5H15zm-2-5h-2v5h2zm-6.263 0 1.071 5H9v-5zM5 13h12.5a2.5 2.5 0 1 0-1.576-4.44c-.694.564-1.814.27-2.074-.651a4 4 0 0 0-7.784 1.815A1.082 1.082 0 0 1 5 11a1 1 0 1 0 0 2"
        />
      </svg>
    );
  },
);

export default ProCake3Line;
