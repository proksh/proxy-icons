import * as React from "react";
import { IconProps } from "./types";

export const ProListSettingsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 7.5h18v-3H3zm0 12h7v-3H3zm7-6H3v-3h7zm1.817.049 1.551.896a4 4 0 0 0 0 1.11l-1.551.896 1.5 2.598 1.552-.896c.29.228.614.416.961.556V20.5h3v-1.79c.348-.141.67-.33.962-.557l1.551.896 1.5-2.598-1.551-.896a4 4 0 0 0 0-1.11l1.551-.896-1.5-2.598-1.551.896a4 4 0 0 0-.962-.556V9.5h-3v1.79c-.347.141-.67.33-.961.557l-1.552-.896zM17.33 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
      </svg>
    );
  },
);

export default ProListSettingsFill;
