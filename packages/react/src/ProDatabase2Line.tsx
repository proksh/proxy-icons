import * as React from "react";
import { IconProps } from "./types";

export const ProDatabase2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.91 5.443C3.38 5.989 3 6.686 3 7.5v10c0 .814.381 1.51.91 2.057.523.542 1.233.984 2.032 1.334C7.544 21.591 9.686 22 12 22s4.456-.408 6.058-1.109c.799-.35 1.509-.792 2.032-1.334.529-.546.91-1.243.91-2.057V8h-.049A2.6 2.6 0 0 0 21 7.5c0-.814-.381-1.51-.91-2.057-.523-.542-1.233-.984-2.032-1.334C16.456 3.409 14.314 3 12 3s-4.456.408-6.058 1.109c-.799.35-1.509.792-2.032 1.334m1.438 1.39C5.066 7.123 5 7.348 5 7.5s.066.376.348.667c.286.296.748.608 1.396.892C8.038 9.625 9.895 10 12 10s3.962-.375 5.256-.941c.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667s-.066-.376-.348-.667c-.286-.296-.748-.608-1.396-.892C15.962 5.375 14.105 5 12 5s-3.962.375-5.256.941c-.648.284-1.11.596-1.396.892M19 12.5v-2.093a8 8 0 0 1-.942.484C16.456 11.591 14.314 12 12 12s-4.456-.408-6.058-1.109A8 8 0 0 1 5 10.407V12.5c0 .152.066.376.348.667.286.296.748.608 1.396.892C8.038 14.625 9.895 15 12 15s3.962-.375 5.256-.941c.648-.284 1.11-.596 1.396-.892.282-.29.348-.515.348-.667M5 15.407q.442.267.942.484C7.544 16.591 9.686 17 12 17s4.456-.408 6.058-1.109a8 8 0 0 0 .942-.484V17.5c0 .152-.066.376-.348.667-.286.296-.748.608-1.396.892-1.294.566-3.151.941-5.256.941s-3.962-.375-5.256-.941c-.648-.284-1.11-.596-1.396-.892-.282-.29-.348-.515-.348-.667z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDatabase2Line;
