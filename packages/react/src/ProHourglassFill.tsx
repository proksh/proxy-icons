import * as React from "react";
import { IconProps } from "./types";

export const ProHourglassFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2v2h2v3l.293.707L10.586 12l-4.293 4.293L6 17v3H4v2h16v-2h-2v-3l-.293-.707-4.257-4.257c.441-.402 1.022-.937 1.613-1.498a51 51 0 0 0 1.739-1.715c.25-.262.478-.513.66-.733.153-.187.36-.452.466-.719L18 7V4h2V2zm12 2v2.5H8V4zm-.233 16c-.582-.658-1.447-1.44-2.767-2.346v-3.24l3 3V20zM11 14.414v3.253c-1.171.835-2.023 1.644-2.632 2.333H8v-2.586z"
        />
      </svg>
    );
  },
);

export default ProHourglassFill;
