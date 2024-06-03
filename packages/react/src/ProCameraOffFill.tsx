import * as React from "react";
import { IconProps } from "./types";

export const ProCameraOffFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 21 1 1 1.414-1.414-19-19L2 3l3 3H2v15zm-5.078-5.078a4.5 4.5 0 0 1-6.344-6.344L10 11a2.5 2.5 0 0 0 3.5 3.5zm1.522-4.135L22 17.343V6h-4.965l-2-3h-6.07l-.523.785 4.27 4.271a4.5 4.5 0 0 1 3.732 3.731"
        />
      </svg>
    );
  },
);

export default ProCameraOffFill;
