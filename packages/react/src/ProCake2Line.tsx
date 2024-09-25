import * as React from "react";
import { IconProps } from "./types";

export const ProCake2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5c.828 0 1.5-.696 1.5-1.555C13.5 2.5 13 1.5 12 1c0 .757-.382 1.005-.76 1.25-.372.24-.74.48-.74 1.195C10.5 4.304 11.172 5 12 5m-1 5H8V6H6v4H3l-1 1v3a4 4 0 0 0 1 2.646V21l1 1h16l1-1v-4.354c.622-.705 1-1.632 1-2.646v-3l-1-1h-3V6h-2v4h-3V6h-2zm8 7.874V20H5v-2.126a4.01 4.01 0 0 0 4-1.228A4 4 0 0 0 12 18a4 4 0 0 0 3-1.354 3.99 3.99 0 0 0 4 1.228M10 14H8a2 2 0 1 1-4 0v-2h16v2a2 2 0 1 1-4 0h-2a2 2 0 1 1-4 0m8.6-10.555C18.6 4.304 17.928 5 17.1 5c-.829 0-1.5-.696-1.5-1.555 0-.716.368-.954.739-1.195.379-.245.76-.493.76-1.25 1 .5 1.5 1.5 1.5 2.445M7 5c.828 0 1.5-.696 1.5-1.555C8.5 2.5 8 1.5 7 1c0 .757-.382 1.005-.76 1.25-.372.24-.74.48-.74 1.195C5.5 4.304 6.172 5 7 5"
        />
      </svg>
    );
  },
);

export default ProCake2Line;
