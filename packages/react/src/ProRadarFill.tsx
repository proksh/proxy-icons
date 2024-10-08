import * as React from "react";
import { IconProps } from "./types";

export const ProRadarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.175 5.268c1.983 1.271 3.534 2.893 4.453 4.58 1.005 1.846 1.326 3.934.326 5.665s-2.968 2.497-5.068 2.55c-2.12.053-4.557-.601-6.842-1.92-2.285-1.32-4.07-3.103-5.084-4.966-1.005-1.845-1.326-3.933-.326-5.664s2.968-2.497 5.068-2.55c1.777-.044 3.777.408 5.723 1.333l-3.779 6.183 1.707 1.042za16 16 0 0 0-1.75-.972l1.721-2.817 1.707 1.042zm-9.2 11.33-2.332 3.887L5.5 22H17v-2H7.266l1.408-2.346a17 17 0 0 1-1.699-1.056"
        />
      </svg>
    );
  },
);

export default ProRadarFill;
