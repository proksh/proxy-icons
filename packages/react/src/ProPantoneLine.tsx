import * as React from "react";
import { IconProps } from "./types";

export const ProPantoneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M10.25 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <path
          fill={color}
          d="m5.076 7.21.55-1.31 9.5-3.828 1.312.58 5 13.5-.507 1.25-8.76 4.185-1.355-.52-.028-.067H7l-.75-.75-3.59-1.3-.605-1.268 3.357-9.661zM8 14.269V19h1.96zm-.69-6.892 4.95 11.951 6.985-3.337-4.326-11.68zM4.268 17.406 6 18.033v-5.611z"
        />
      </svg>
    );
  },
);

export default ProPantoneLine;
