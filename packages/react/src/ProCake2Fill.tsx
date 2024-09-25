import * as React from "react";
import { IconProps } from "./types";

export const ProCake2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 3.445C8.5 4.304 7.828 5 7 5s-1.5-.696-1.5-1.555c0-.716.368-.954.74-1.195C6.617 2.005 7 1.757 7 1c1 .5 1.5 1.5 1.5 2.445M12 5c.828 0 1.5-.696 1.5-1.555C13.5 2.5 13 1.5 12 1c0 .757-.382 1.005-.76 1.25-.372.24-.74.48-.74 1.195C10.5 4.304 11.172 5 12 5m5.1 0c.828 0 1.5-.696 1.5-1.555C18.6 2.5 18.1 1.5 17.1 1c0 .757-.383 1.005-.761 1.25-.371.24-.74.48-.74 1.195 0 .859.672 1.555 1.5 1.555M3 21v-4.354A4 4 0 0 1 2 14v-3l1-1h3V6h2v4h3V6h2v4h3V6h2v4h3l1 1v3a4 4 0 0 1-1 2.646V21l-1 1H4zm13-7a2 2 0 1 0 4 0v-2H4v2a2 2 0 1 0 4 0h2a2 2 0 1 0 4 0z"
        />
      </svg>
    );
  },
);

export default ProCake2Fill;
