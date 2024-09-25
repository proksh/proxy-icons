import * as React from "react";
import { IconProps } from "./types";

export const ProPictureInPicture2Fill = React.forwardRef<
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
      <path fill={color} d="M2 21h8v-2H4V5h16v6h2V3H2z" />
      <path
        fill={color}
        d="M12 13v8h10v-8zM7.543 9.957 5.5 12H11V6.5L8.957 8.543l-2.25-2.25-1.414 1.414z"
      />
    </svg>
  );
});

export default ProPictureInPicture2Fill;
