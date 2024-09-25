import * as React from "react";
import { IconProps } from "./types";

export const ProPrinterCloudLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2 6 3v4H2v12h3v3h7.044a4.1 4.1 0 0 1-.576-2H7v-3h5.668q.401-.4.898-.68c.154-.477.382-.921.668-1.32H5v2H4V9h16v4.376c.796.336 1.48.88 1.989 1.564l.011.003V7h-4V3l-1-1zm9 5H8V4h8z"
        />
        <path
          fill={color}
          d="M5 12h3v-2H5zm18.73 7.553q.004-.06.003-.12a2.567 2.567 0 0 0-2.949-2.538 2.801 2.801 0 0 0-5.45.905v.013A2.1 2.1 0 0 0 15.566 22H21.4a2.333 2.333 0 0 0 2.33-2.447"
        />
      </svg>
    );
  },
);

export default ProPrinterCloudLine;
