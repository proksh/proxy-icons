import * as React from "react";
import { IconProps } from "./types";

export const ProTranslate2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 2v2h6v2h-1.995c-.642 2.032-1.89 4.328-3.699 6.351.82.782 1.684 1.39 2.545 1.713l-.702 1.872c-1.186-.444-2.286-1.237-3.257-2.17-1.683 1.506-3.728 2.749-6.112 3.444l-.56-1.92c2.06-.601 3.843-1.683 5.319-2.998A20.5 20.5 0 0 1 4.842 8h2.233a19 19 0 0 0 1.879 2.86C10.31 9.307 11.302 7.583 11.89 6H2V4h6V2zm4.34 19 1.155-3h4.01l1.155 3h2.142L18.434 9.641h-1.867L12.198 21zm3.16-8.214L18.736 16h-2.472z"
        />
      </svg>
    );
  },
);

export default ProTranslate2Line;
