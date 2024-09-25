import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftDoubleLine = React.forwardRef<
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
        d="M12.557 7.207 7.764 12l4.793 4.793-1.414 1.414L4.936 12l6.207-6.207z"
      />
      <path
        fill={color}
        d="M18.557 7.207 13.764 12l4.793 4.793-1.414 1.414L10.936 12l6.207-6.207z"
      />
    </svg>
  );
});

export default ProArrowLeftDoubleLine;
