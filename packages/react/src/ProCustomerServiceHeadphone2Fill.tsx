import * as React from "react";
import { IconProps } from "./types";

export const ProCustomerServiceHeadphone2Fill = React.forwardRef<
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
        d="M11.5 2.5A9.5 9.5 0 0 0 2 12v6l1 1h4l1-1v-6l-1-1H4.066A7.5 7.5 0 0 1 11.5 4.5h1a7.5 7.5 0 0 1 7.434 6.5H17l-1 1v6l1 1h3a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4v-7a9.5 9.5 0 0 0-9.5-9.5z"
      />
    </svg>
  );
});

export default ProCustomerServiceHeadphone2Fill;
