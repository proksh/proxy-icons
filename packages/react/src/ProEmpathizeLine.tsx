import * as React from "react";
import { IconProps } from "./types";

export const ProEmpathizeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-.466 5.542c.914.276 1.783.827 2.466 1.423.683-.596 1.552-1.147 2.466-1.423 1.03-.31 2.283-.303 3.27.629a3.946 3.946 0 0 1 0 5.788l-5.737 5.416-5.735-5.416a3.946 3.946 0 0 1 0-5.788c.987-.932 2.24-.939 3.27-.629m-1.897 2.083c-.85.802-.85 2.078 0 2.88L12 19.625l4.364-4.12c.85-.802.85-2.078 0-2.88-.28-.265-.69-.357-1.32-.167-.642.193-1.341.642-1.897 1.167L12 14.707l-1.146-1.082c-.556-.525-1.255-.974-1.897-1.167-.63-.19-1.04-.098-1.32.167"
        />
      </svg>
    );
  },
);

export default ProEmpathizeLine;
