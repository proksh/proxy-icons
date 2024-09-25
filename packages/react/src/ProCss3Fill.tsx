import * as React from "react";
import { IconProps } from "./types";

export const ProCss3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m2 18 .8-4h3.06l-.418 2.087 4.617 1.731 6.34-2.114.842-4.204H3.3l.6-3h13.94l.5-2.5H4.4L5 3h17l-3 15-9 3z"
        />
      </svg>
    );
  },
);

export default ProCss3Fill;
