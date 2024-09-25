import * as React from "react";
import { IconProps } from "./types";

export const ProHomeGearLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9.595 10.457-.992-.573-1 1.732.992.573a3.5 3.5 0 0 0 0 1.623l-.992.572 1 1.732.993-.573c.393.372.872.654 1.404.812V17.5h2v-1.145a3.5 3.5 0 0 0 1.405-.812l.993.573 1-1.732-.992-.572a3.5 3.5 0 0 0 0-1.623l.992-.573-1-1.732-.993.573A3.5 3.5 0 0 0 13 9.645V8.5h-2v1.145a3.5 3.5 0 0 0-1.405.812M13.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
        <path
          fill={color}
          d="m12 1.135 8 7.429v.022L22.415 11H20v10H4V11H1.586L4 8.586v-.022zM6 9.436V19h12V9.436l-6-5.571z"
        />
      </svg>
    );
  },
);

export default ProHomeGearLine;
