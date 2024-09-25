import * as React from "react";
import { IconProps } from "./types";

export const ProLightbulbLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 17.59V22l1 1h6l1-1v-4.41c0-.359.221-.77.671-1.095a8 8 0 1 0-9.342 0c.45.324.671.736.671 1.095M12 4a6 6 0 0 1 3.502 10.872C14.7 15.451 14 16.406 14 17.59V18h-1v-5h-2v5h-1v-.41c0-1.184-.699-2.139-1.502-2.718A6 6 0 0 1 12 4m-2 17v-1h4v1z"
        />
      </svg>
    );
  },
);

export default ProLightbulbLine;
