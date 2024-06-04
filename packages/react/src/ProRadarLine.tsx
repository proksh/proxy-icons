import * as React from "react";
import { IconProps } from "./types";

export const ProRadarLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.175 5.268c1.983 1.271 3.534 2.893 4.453 4.58 1.005 1.846 1.326 3.934.326 5.665s-2.968 2.497-5.068 2.55c-2.12.053-4.557-.601-6.842-1.92-2.285-1.32-4.07-3.103-5.084-4.966-1.005-1.845-1.326-3.933-.326-5.664s2.968-2.497 5.068-2.55c1.778-.044 3.777.408 5.723 1.333l1.722-2.817 1.706 1.042-.896 1.467zm-3.822 6.253-1.706-1.043 2.728-4.465c-1.635-.746-3.253-1.084-4.623-1.05-1.716.043-2.867.65-3.386 1.55s-.47 2.2.35 3.708c.811 1.49 2.308 3.023 4.328 4.19 2.02 1.165 4.096 1.695 5.792 1.653 1.716-.043 2.867-.651 3.386-1.55.52-.9.47-2.201-.35-3.709-.73-1.341-2.017-2.718-3.74-3.83l-.783 1.28zm-5.378 5.077a17 17 0 0 0 1.699 1.056L7.266 20H17v2H5.5l-.858-1.515z"
        />
      </svg>
    );
  },
);

export default ProRadarLine;
