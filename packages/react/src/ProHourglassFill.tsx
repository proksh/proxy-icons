import * as React from "react";
import { IconProps } from "./types";

export const ProHourglassFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 2H4v2h2v3c.037.191.065.369.15.545q.066.143.2.38a10 10 0 0 0 .87 1.262c.641.803 1.6 1.792 2.996 2.813-1.396 1.021-2.355 2.01-2.997 2.813a10 10 0 0 0-.868 1.261 6 6 0 0 0-.202.38c-.086.18-.112.351-.149.546v3H4v2h16v-2h-2v-3l-.072-.371c-.184-.462-.482-1.2-1.291-2.152-.613-.72-1.502-1.545-2.826-2.477 1.324-.932 2.213-1.756 2.826-2.477.809-.952 1.107-1.69 1.291-2.152L18 7V4h2zm-7 15.654c1.32.906 2.185 1.688 2.767 2.346H16v-2.805c-.147-.353-.37-.814-.887-1.422-.436-.513-1.094-1.146-2.113-1.893zm-2 .013v-3.754c-1.033.804-1.744 1.555-2.22 2.15a8 8 0 0 0-.693 1.003l-.087.16V20h.368c.609-.689 1.46-1.498 2.632-2.333M8 6.775A5 5 0 0 0 8.126 7h7.79L16 6.805V4H8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProHourglassFill;
