import * as React from "react";
import { IconProps } from "./types";

export const ProCrop2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 18V7H2V5h3V2h2v3h10.586l2.207-2.207 1.414 1.414L19 6.414V17h3v2h-3v3h-2v-3H6zM15.586 7H7v8.586zM8.414 17H17V8.414z"
        />
      </svg>
    );
  },
);

export default ProCrop2Line;
