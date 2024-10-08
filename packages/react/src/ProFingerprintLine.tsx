import * as React from "react";
import { IconProps } from "./types";

export const ProFingerprintLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 11c0-2.125.736-4.078 1.968-5.618l1.426 1.426A6.97 6.97 0 0 0 5 11v2.571c0 .44.001.869-.197 1.363-.164.411-.468.867-.896 1.509l-.075.112-1.664-1.11c.533-.799.703-1.064.779-1.254.041-.104.053-.157.053-.691zm4.808-5.606L6.382 3.968A9 9 0 0 1 21 11v2.5c0 2.638-.529 4.748-1.051 6.316l-1.898-.632c.478-1.432.949-3.322.949-5.684V11A7 7 0 0 0 7.808 5.394"
        />
        <path
          fill={color}
          d="M12 6a5 5 0 0 0-5 5v1c0 1.98-.127 3.22-.449 4.184-.309.928-.824 1.675-1.758 2.609l1.414 1.414c1.066-1.066 1.801-2.069 2.242-3.39C8.877 15.53 9 14.02 9 12v-1a3 3 0 1 1 6 0h2a5 5 0 0 0-5-5m4.996 7h-2c-.029 2.34-.246 5.264-1.89 8.553l1.789.894c1.847-3.695 2.073-6.993 2.101-9.447"
        />
        <path
          fill={color}
          d="M11 15.5V10h2v5.5c0 2.913-1.745 5.159-3.293 6.707l-1.414-1.414C9.745 19.34 11 17.587 11 15.5"
        />
      </svg>
    );
  },
);

export default ProFingerprintLine;
