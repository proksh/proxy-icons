import * as React from "react";
import { IconProps } from "./types";

export const ProAlignVerticallyLine = React.forwardRef<
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
        d="M8.793 5.793 8 6.586V3H6v3.586l-.793-.793-1.414 1.414L7 10.414l3.207-3.207zm10 12.914 1.414-1.414L17 14.086l-3.207 3.207 1.414 1.414.793-.793V21.5h2v-3.586zM15.207 5.793l-1.414 1.414L17 10.414l3.207-3.207-1.414-1.414-.793.793V3h-2v3.586zM8.793 18.707l1.414-1.414L7 14.086l-3.207 3.207 1.414 1.414.793-.793V21.5h2v-3.586zM21 11H3v2h18z"
      />
    </svg>
  );
});

export default ProAlignVerticallyLine;
