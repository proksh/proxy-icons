import * as React from "react";
import { IconProps } from "./types";

export const ProHaze2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6 6.867a18 18 0 0 0-.955-1.065C10.53 8.774 9.918 8.22 9.26 7.79 8.621 7.369 7.836 7 7 7a5 5 0 0 0 0 10c.836 0 1.622-.37 2.261-.789.657-.43 1.27-.985 1.784-1.513.362-.372.686-.742.955-1.065.268.323.593.693.955 1.065.514.527 1.127 1.083 1.784 1.513.64.42 1.424.789 2.26.789a5 5 0 0 0 0-10c-.835 0-1.62.37-2.26.789-.657.43-1.27.985-1.784 1.513-.362.372-.687.742-.955 1.065M4 12a3 3 0 0 1 3-3c.268 0 .66.13 1.165.461.488.32.987.765 1.447 1.237.456.468.85.94 1.133 1.297l.004.005-.004.005c-.282.357-.677.83-1.133 1.297-.46.473-.959.917-1.447 1.237C7.66 14.869 7.268 15 7 15a3 3 0 0 1-3-3m10.388 1.302c-.456-.468-.85-.94-1.133-1.297L13.251 12l.004-.005c.282-.357.677-.83 1.133-1.297.46-.473.958-.917 1.447-1.237C16.34 9.131 16.73 9 17 9a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461-.489-.32-.987-.764-1.447-1.237M4.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9-18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProHaze2Line;
