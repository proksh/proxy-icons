import * as React from "react";
import { IconProps } from "./types";

export const ProTreasureMapLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.586 12-1.293-1.293 1.414-1.414L16 10.586l1.293-1.293 1.414 1.414L17.414 12l1.293 1.293-1.414 1.414L16 13.414l-1.293 1.293-1.414-1.414zM10 11h2v2h-2zm-2 0H6v2h2z"
        />
        <path
          fill={color}
          d="m9.038 1.9 6 3L22 2v17.167l-7.038 2.932-6-3L2 22V4.833zM4 6.168V19l5.038-2.1 6 3L20 17.834V5l-5.038 2.1-6-3z"
        />
      </svg>
    );
  },
);

export default ProTreasureMapLine;
