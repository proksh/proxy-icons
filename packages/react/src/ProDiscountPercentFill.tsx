import * as React from "react";
import { IconProps } from "./types";

export const ProDiscountPercentFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M14.299 2.793a2.977 2.977 0 0 0-4.597 0 2.98 2.98 0 0 1-2.587 1.071 2.977 2.977 0 0 0-3.25 3.251 2.98 2.98 0 0 1-1.072 2.586 2.977 2.977 0 0 0 0 4.598c.766.63 1.167 1.6 1.072 2.586a2.977 2.977 0 0 0 3.25 3.25 2.98 2.98 0 0 1 2.587 1.072 2.977 2.977 0 0 0 4.597 0 2.98 2.98 0 0 1 2.586-1.071 2.977 2.977 0 0 0 3.25-3.251 2.98 2.98 0 0 1 1.072-2.586 2.977 2.977 0 0 0 0-4.598 2.98 2.98 0 0 1-1.071-2.586 2.978 2.978 0 0 0-3.25-3.25 2.98 2.98 0 0 1-2.587-1.072m1.908 6.414-7 7-1.414-1.414 7-7zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
      />
    </svg>
  );
});

export default ProDiscountPercentFill;
