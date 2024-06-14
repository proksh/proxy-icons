import * as React from "react";
import { IconProps } from "./types";

export const ProRocketFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 1.456.287.086A8.02 8.02 0 0 1 18 9.22v5.366l2 2V19H4v-2.414l2-2V9.22c0-3.54 2.322-6.66 5.713-7.678zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3 9v1c0 .376-.177.658-.277.796-.116.16-.255.295-.377.402-.247.216-.55.421-.816.587a14 14 0 0 1-.984.56 26 26 0 0 1-.546.273l-.156-.077q-.195-.097-.39-.197a15 15 0 0 1-.984-.559 6.6 6.6 0 0 1-.816-.587 2.5 2.5 0 0 1-.377-.402C9.177 21.658 9 21.376 9 21v-1z"
        />
      </svg>
    );
  },
);

export default ProRocketFill;
