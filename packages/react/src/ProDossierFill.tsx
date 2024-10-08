import * as React from "react";
import { IconProps } from "./types";

export const ProDossierFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v1h3l1 1v16l-1 1H4l-1-1V5l1-1h3zm2 3h6V4H9zm2 11h2v-2h2v-2h-2v-2h-2v2H9v2h2z"
        />
      </svg>
    );
  },
);

export default ProDossierFill;
