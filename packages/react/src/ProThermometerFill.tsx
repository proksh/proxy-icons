import * as React from "react";
import { IconProps } from "./types";

export const ProThermometerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.535 2.808-8.72 8.72-.708 4.95-3.3 3.3 1.415 1.414 3.3-3.3 4.95-.706 8.72-8.721a4 4 0 1 0-5.657-5.657m2.829 7.07-2.121-2.12 1.414-1.415 2.121 2.121zm-4.95.708 1.415-1.414 2.12 2.12-1.413 1.415zm-2.828 2.828L12 12l2.121 2.121-1.414 1.415z"
        />
      </svg>
    );
  },
);

export default ProThermometerFill;
