import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpRightDoubleLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M12.086 10 8.293 6.207l1.414-1.414L15.914 11l-6.207 6.207-1.414-1.414L12.086 12H6v7H4v-9z"
      />
      <path
        fill={color}
        d="m18.586 11-4.793-4.793 1.414-1.414L21.414 11l-6.207 6.207-1.414-1.414z"
      />
    </svg>
  );
});

export default ProCornerUpRightDoubleLine;
