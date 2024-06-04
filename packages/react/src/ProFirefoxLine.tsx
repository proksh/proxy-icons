import * as React from "react";
import { IconProps } from "./types";

export const ProFirefoxLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10c0-1.463.314-2.854.88-4.106.466-.939 1.233-1.874 1.85-2.194-.653 1.283-.973 2.54-1.04 3.383.454-1.5 1.315-2.757 2.52-3.644 2.066-1.519 4.848-1.587 5.956-.62-2.056.707-4.296 3.548-3.803 6.876.08.55.245 1.083.489 1.582-.384-1.01-.418-2.433.202-3.358.692-1.03 1.678-1.248 2.206-1.136-.208-.044-.668.836-.736.991a3 3 0 0 0-.251 1.25 3.4 3.4 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.411-1.002.954-1.471 1.07-3.968-.154-5.952a7 7 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205q-1.659.266-2.824.956C7.756 2.798 9.912 2 12 2M6.876 7.705c-2.253.781-3.501 3.17-2.579 6.46a8 8 0 0 0 7.455 5.831L12 20a8 8 0 0 0 7.985-7.504l.009-.212q-.194.522-.463.98l-.14.227c-2.104 3.239-6.681 4.075-9.48 1.348a5.4 5.4 0 0 1-.962-1.257l-.106-.201q-2.604-.58-2.543-2.817c.027-.991.23-1.96.575-2.86"
        />
      </svg>
    );
  },
);

export default ProFirefoxLine;