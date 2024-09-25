import * as React from "react";
import { IconProps } from "./types";

export const ProRemoteControl2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5 3 1-1h12l1 1v18l-1 1H6l-1-1zm6 5H9v2h2v2h2v-2h2V8h-2V6h-2zm-2 7v2h2v-2zm4 2h2v-2h-2z"
        />
      </svg>
    );
  },
);

export default ProRemoteControl2Fill;
